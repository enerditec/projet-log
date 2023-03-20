import os
import sys
import time
import requests

API_KEY = "9dc1a75abbc78d15007cb04a61ec65a10014fa0a472a534ff288d0148c811e5b"
URL_SCAN = "https://www.virustotal.com/vtapi/v2/file/scan"
URL_REPORT = "https://www.virustotal.com/vtapi/v2/file/report"

def scan_file(file_path):
    params = {
        "apikey": API_KEY
    }

    with open(file_path, "rb") as file:
        files = {
            "file": (os.path.basename(file_path), file)
        }

        response = requests.post(URL_SCAN, params=params, files=files)

    if response.status_code == 200:
        return response.json()["resource"]
    else:
        raise Exception(f"Erreur lors de l'envoi du fichier: {response.status_code}")

def get_scan_report(resource):
    params = {
        "apikey": API_KEY,
        "resource": resource
    }

    while True:
        response = requests.get(URL_REPORT, params=params)

        if response.status_code == 200:
            json_response = response.json()
            if json_response["response_code"] == 1:
                return json_response
            else:
                time.sleep(10)  # Attendre 10 secondes avant de réessayer
        else:
            raise Exception(f"Erreur lors de la récupération du rapport: {response.status_code}")

def main(file_path):
    if not os.path.isfile(file_path):
        print(f"Le fichier '{file_path}' n'existe pas.")
        return

    
    resource = scan_file(file_path)
    
    report = get_scan_report(resource)
    malicious_engines = []

    for engine, result in report["scans"].items():
        if result["detected"]:
            malicious_engines.append(engine)

    if malicious_engines:
        print("Le fichier est considéré comme malveillant par les moteurs d'analyse suivants :")
        for engine in malicious_engines:
            print(f" - {engine}")
    else:
        print("Le fichier est considéré comme non malveillant.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Veuillez fournir le chemin du fichier à analyser en tant qu'argument.")
    else:
        file_path = sys.argv[1]
        main(file_path)
