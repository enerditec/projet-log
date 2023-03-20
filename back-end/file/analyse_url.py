import requests
import sys

# Clé API VirusTotal (remplacez par votre propre clé)
API_KEY = "9dc1a75abbc78d15007cb04a61ec65a10014fa0a472a534ff288d0148c811e5b"

# URL de l'API de VirusTotal pour l'analyse de réputation des URL
VIRUSTOTAL_URL = "https://www.virustotal.com/vtapi/v2/url/report"

# Fonction pour effectuer une analyse de réputation sur une URL donnée
def check_url(url):
    params = {"apikey": API_KEY, "resource": url}
    response = requests.get(VIRUSTOTAL_URL, params=params)

    # Analyse de la réponse de l'API de VirusTotal
    if response.status_code == 200:
        result = response.json()

        if result["response_code"] == 1:
            positives = result["positives"]
            total = result["total"]
            if positives == 0:
                print(f"L'URL {url} est considérée comme sûre par les fréro.")
            else:
                print(f"L'URL {url} est considérée comme malveillante par {positives}/{total} des antivirus, par les copains d'ESTIAM et michel du brazil")
        else:
            print(f"L'URL {url} n'a pas encore été analysée.")
    else:
        print("Une erreur s'est produite lors de la requête à l'API.")

# Récupération de l'URL à analyser à partir de la ligne de commande
if len(sys.argv) != 2:
    print("Veuillez spécifier une URL à analyser.")
    exit()

url = sys.argv[1]
check_url(url)