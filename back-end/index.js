const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('node:child_process');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');
const FormData = require('form-data'); //
const { MongoClient } = require('mongodb');
const archiver = require('archiver');




const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use((req, res, next) => {
  res.cookie('cookieName', 'cookieValue', {
    sameSite: 'none',
    secure: true
  });
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const uri = "mongodb://217.182.168.137:2717/";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function fetchLogs(adresse_mac) {
  try {
    await client.connect();
    const db = client.db("monitoring");
    const collection = db.collection("ressource");

    const query = adresse_mac ? { adresse_mac } : {};

    if (adresse_mac) {
      const logs = await collection.find(query).toArray();
      return logs;
    } else {
      const logs = await collection.aggregate([
        {
          $group: {
            _id: "$adresse_mac",
            doc: { $first: "$$ROOT" },
          },
        },
        { $replaceRoot: { newRoot: "$doc" } },
      ]).toArray();
      return logs;
    }

  } catch (error) {
    console.error("Error fetching logs:", error);
    return [];
  } finally {
    await client.close();
  }
}

app.get("/api/logs", async (req, res) => {
  const adresse_mac = req.query.adresse_mac;
  const logs = await fetchLogs(adresse_mac);
  res.json(logs);
});

app.get('/download', (req, res) => {
  console.log("téléchargement")
  const folderPath = '/home/ubuntu/script/enzo/telechargement';
  const archiveName = 'folder.zip';

  res.attachment(archiveName);

  const zip = archiver('zip');
  zip.pipe(res);

  zip.directory(folderPath, false);
  zip.finalize();
});

app.post('/send-link', (req, res) => {
  const link = req.body.link;
  console.log(req.body.link);

  exec(`python3 file/analyse_url.py ${link}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      return;
    }

    console.log(`Sortie du script : ${stdout}`);
    res.send(stdout);
  });
});

const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const API_KEY = "9dc1a75abbc78d15007cb04a61ec65a10014fa0a472a534ff288d0148c811e5b";
const URL_SCAN = "https://www.virustotal.com/vtapi/v2/file/scan";
const URL_REPORT = "https://www.virustotal.com/vtapi/v2/file/report";

const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const ext = path.extname(file.originalname);
  const name = path.basename(file.originalname, ext);
  const fullName = name + ext;
  console.log(`Nom du fichier : ${fullName}`);
  try {
    const fileContent = fs.readFileSync(req.file.path);
    const hash = crypto.createHash('sha256').update(fileContent).digest('hex');

    // Envoyer le fichier à VirusTotal pour analyse
    const formData = new FormData();
    formData.append('apikey', API_KEY);
    formData.append('file', fs.createReadStream(req.file.path));

    const scanResult = await axios.post(URL_SCAN, formData, {
      headers: formData.getHeaders(),
    });

    // Récupérer le rapport d'analyse
    const reportResponse = await axios.get(URL_REPORT, {
      params: {
        apikey: API_KEY,
        resource: hash,
      },
    });

    // Supprimer le fichier temporaire
    fs.unlinkSync(req.file.path);
    //console.log({ scanResult: scanResult.data, report: reportResponse.data });
    //res.send({ scanResult: scanResult.dat, report: reportResponse.data });
    //const resultat = reportResponse.reportResponse;
    //console.log("QUOICOUBAE");
    console.log(scanResult.data);
    res.send("Scan request successfully queued, is safe");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'analyse du fichier.' });
  }
});


// app.get('/', (req, res) => {
//   const link = req.body.link;
//   console.log(req.body.link);

//   exec(`python3 analyse_url.py ${link}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Erreur d'exécution du script : ${error}`);
//       return;
//     }

//     console.log(`Sortie du script : ${stdout}`);
//     res.send(stdout);
//   });
// });
