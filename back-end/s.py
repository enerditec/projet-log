import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

packages = [
    "smtplib",
    "scapy",
    "pymongo",
    "psutil",
    "matplotlib",
    "queue",
    "python-nmap",
    "requests",
    "beautifulsoup4",
    "csv",
    "tkinter"
]

for package in packages:
    try:
        import(package)
    except ImportError:
        print(f"Le paquet {package} n'est pas installé. Installation en cours...")
        install(package)