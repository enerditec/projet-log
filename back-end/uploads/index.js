const json = require("./build/Release/Json.node");

var start = +new Date();

//console.log("Lecture requete JSON");
//console.log(json.Sendjson('[{"name": "John","age": 21,"language": ["JavaScript", "PHP", "Python"]},{"name": "Smith","age": 20,"language": ["PHP", "Go", "JavaScript"]},{"name": "Marc","age": 25,"language": ["Nodejs", "Import", "Require"]}]'));
  
const data1 = {
    "graph": {
      "cells": [
        {
          "type": "myNamespace.Link",
          "source": {
            "id": "12f3f453-d0cc-4de2-933d-cfa403133378"
          },
          "target": {
            "anchor": {
              "name": "perpendicular"
            },
            "id": "70283393-80b3-4721-9573-80b6e3a4f95f"
          },
          "id": "85548485-14a0-4011-b767-a3b9773023f0",
          "router": {
            "name": "manhattan",
            "args": {
              "endDirections": [
                "top",
                "bottom"
              ],
              "padding": 0
            }
          },
          "z": 1,
          "parent": "12f3f453-d0cc-4de2-933d-cfa403133378",
          "attrs": {
            "line": {
              "targetMarker": {
                "r": 0,
                "cursor": "pointer"
              },
              "sourceMarker": {
                "type": "circle",
                "r": 0,
                "cx": 0,
                "stroke": "black",
                "strokeWidth": 2,
                "cursor": "pointer"
              }
            }
          }
        },
        {
          "type": "myNamespace.SlackGenerator",
          "data": {
            "alias": "",
            "connectionNode": "BUS3",
            "etat": "Fonctionnel",
            "miseATerre": "",
            "name": "SL1",
            "niveauTension": "380",
            "niveauTensionUnit": "kV",
            "nodeType": "Vteta",
            "p": "",
            "pUnit": "",
            "pcc": "100",
            "pccUnit": "MVA",
            "phase": "ABC",
            "puissanceActive": "",
            "puissanceActiveUnit": "MW",
            "puissanceReactive": "",
            "puissanceReactiveUnit": "Mvar",
            "q": "",
            "qUnit": "",
            "ratioImpedance": "",
            "ratioImpedanceUnit": "",
            "ratioResReact": "",
            "ratioResReactUnit": "",
            "ratioRX": "0.1",
            "ratioRXUnit": "pu",
            "substation": "",
            "tensionPcc": "54.908675875",
            "tensionPccUnit": "kV",
            "terre": false,
            "teta": "0",
            "tetaUnit": "Degré",
            "v": "",
            "vUnit": "",
            "vTeta": "380",
            "vTetaUnit": "kV",
            "zone": ""
          },
          "resultData": {
            "name": "",
            "nameSelected": true,
            "connectionNode": "",
            "connectionNodeSelected": true,
            "niveauTension": "",
            "niveauTensionSelected": true,
            "puissanceActive": "",
            "puissanceActiveSelected": true,
            "puissanceReactive": "",
            "puissanceReactiveSelected": true
          },
          "size": {
            "width": 60,
            "height": 60
          },
          "markup": [
            {
              "tagName": "rect",
              "selector": "body"
            },
            {
              "tagName": "text",
              "selector": "nameLabel"
            },
            {
              "tagName": "text",
              "selector": "connectionNodeLabel"
            },
            {
              "tagName": "text",
              "selector": "niveauTensionLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceActiveLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceReactiveLabel"
            }
          ],
          "position": {
            "x": 890,
            "y": 190
          },
          "angle": 0,
          "id": "12f3f453-d0cc-4de2-933d-cfa403133378",
          "z": 2,
          "embeds": [
            "85548485-14a0-4011-b767-a3b9773023f0"
          ],
          "attrs": {
            "nameLabel": {
              "text": "SL1"
            },
            "niveauTensionLabel": {
              "text": "380 kV"
            }
          }
        },
        {
          "type": "myNamespace.BusH",
          "size": {
            "width": 200,
            "height": 3
          },
          "data": {
            "alias": "",
            "angleInit": "0",
            "angleInitUnit": "Degré",
            "courantCcMax": "",
            "courantCcMaxUnit": "",
            "etat": "Fonctionnel",
            "name": "BUS3",
            "niveauTension": "380",
            "niveauTensionUnit": "kV",
            "phase": "ABC",
            "substation": "",
            "tempsSimulation": "",
            "tempsSimulationUnit": "",
            "tensionVref": "380",
            "tensionVrefUnit": "kV",
            "zone": ""
          },
          "resultData": {
            "name": "",
            "nameSelected": true,
            "niveauTension": "",
            "niveauTensionSelected": true,
            "angleInit": "",
            "angleInitSelected": true,
            "puissanceActive": "",
            "puissanceActiveSelected": true,
            "puissanceReactive": "",
            "puissanceReactiveSelected": true
          },
          "markup": [
            {
              "tagName": "rect",
              "selector": "body"
            },
            {
              "tagName": "rect",
              "selector": "left"
            },
            {
              "tagName": "rect",
              "selector": "right"
            },
            {
              "tagName": "text",
              "selector": "nameLabel"
            },
            {
              "tagName": "text",
              "selector": "niveauTensionLabel"
            },
            {
              "tagName": "text",
              "selector": "angleInitLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceActiveLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceReactiveLabel"
            }
          ],
          "position": {
            "x": 820,
            "y": 350
          },
          "angle": 0,
          "id": "70283393-80b3-4721-9573-80b6e3a4f95f",
          "z": 3,
          "embeds": [
            "12a2f6b9-dec4-4d9c-a581-f96afd51a8f3"
          ],
          "attrs": {
            "nameLabel": {
              "text": "BUS3"
            },
            "niveauTensionLabel": {
              "text": "380 kV"
            }
          }
        },
        {
          "type": "myNamespace.BusH",
          "size": {
            "width": 230,
            "height": 3
          },
          "data": {
            "alias": "",
            "angleInit": "0",
            "angleInitUnit": "Degré",
            "courantCcMax": "",
            "courantCcMaxUnit": "",
            "etat": "Fonctionnel",
            "name": "BUS2",
            "niveauTension": "380",
            "niveauTensionUnit": "kV",
            "phase": "ABC",
            "substation": "",
            "tempsSimulation": "",
            "tempsSimulationUnit": "",
            "tensionVref": "380",
            "tensionVrefUnit": "kV",
            "zone": ""
          },
          "resultData": {
            "name": "",
            "nameSelected": true,
            "niveauTension": "",
            "niveauTensionSelected": true,
            "angleInit": "",
            "angleInitSelected": true,
            "puissanceActive": "",
            "puissanceActiveSelected": true,
            "puissanceReactive": "",
            "puissanceReactiveSelected": true
          },
          "markup": [
            {
              "tagName": "rect",
              "selector": "body"
            },
            {
              "tagName": "rect",
              "selector": "left"
            },
            {
              "tagName": "rect",
              "selector": "right"
            },
            {
              "tagName": "text",
              "selector": "nameLabel"
            },
            {
              "tagName": "text",
              "selector": "niveauTensionLabel"
            },
            {
              "tagName": "text",
              "selector": "angleInitLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceActiveLabel"
            },
            {
              "tagName": "text",
              "selector": "puissanceReactiveLabel"
            }
          ],
          "position": {
            "x": 800,
            "y": 490
          },
          "angle": 0,
          "id": "5ed80c45-4d0b-4d7c-b983-691d3ddbf9ec",
          "z": 4,
          "attrs": {
            "nameLabel": {
              "text": "BUS2"
            },
            "niveauTensionLabel": {
              "text": "380 kV"
            }
          }
        },
        {
          "type": "myNamespace.Line",
          "data": {
            "alias": "",
            "capacitance": "0",
            "capacitanceUnit": "nF/km",
            "courantCc": "",
            "courantCcUnit": "",
            "etat": "Fonctionnel",
            "frequence": "50",
            "frequenceUnit": "hZ",
            "lineType": "cable",
            "longueur": "1",
            "longueurUnit": "km",
            "name": "L1",
            "niveauTension": "380",
            "niveauTensionUnit": "kV",
            "noeudArrivee": "BUS2",
            "noeudDepart": "BUS3",
            "nombreLigne": "1",
            "perteTerre": "0",
            "perteTerreUnit": "kW",
            "phase": "ABC",
            "reactance": "33",
            "reactanceUnit": "Ω/km",
            "resistance": "3",
            "resistanceUnit": "Ω/km",
            "sectionCable": "",
            "sectionCableUnit": "",
            "substation": "",
            "switchArrive": "",
            "switchDepart": "",
            "tauxCharge": "",
            "tauxChargeUnit": "",
            "temperature": "",
            "temperatureUnit": "",
            "tension": "380",
            "tensionUnit": "kV",
            "zone": ""
          },
          "resultData": {
            "name": "",
            "nameSelected": true,
            "noeudDepart": "",
            "noeudDepartSelected": true,
            "noeudArrivee": "",
            "noeudArriveeSelected": true,
            "niveauTension": "",
            "niveauTensionSelected": true,
            "puissanceApparenteS": "",
            "puissanceApparenteSSelected": true
          },
          "displayForm": false,
          "source": {
            "anchor": {
              "name": "perpendicular"
            },
            "id": "70283393-80b3-4721-9573-80b6e3a4f95f"
          },
          "target": {
            "anchor": {
              "name": "perpendicular"
            },
            "id": "5ed80c45-4d0b-4d7c-b983-691d3ddbf9ec"
          },
          "id": "12a2f6b9-dec4-4d9c-a581-f96afd51a8f3",
          "z": 5,
          "router": {
            "name": "manhattan",
            "args": {
              "startDirections": [
                "top",
                "bottom"
              ],
              "padding": 0
            }
          },
          "labels": [
            {
              "position": 0.5,
              "attrs": {
                "text": {
                  "text": "L1",
                  "fill": "black"
                }
              }
            },
            {
              "position": 0.2,
              "attrs": {
                "text": {
                  "text": "380 kV",
                  "fill": "black"
                }
              }
            }
          ],
          "parent": "70283393-80b3-4721-9573-80b6e3a4f95f",
          "attrs": {
            ".marker-source": {
              "d": "M 0 0"
            },
            ".marker-target": {
              "d": "M 0 0"
            }
          }
        },
        {
          "type": "myNamespace.Charge",
          "data": {
            "alias": "",
            "connectionNode": "BUS2",
            "etat": "Fonctionnel",
            "facteurP": "",
            "facteurQ": "",
            "name": "CH2",
            "niveauTension": "380",
            "niveauTensionUnit": "kV",
            "nodeType": "PV",
            "phase": "ABC",
            "p": "400",
            "pUnit": "MW",
            "q": "",
            "qUnit": "",
            "substation": "",
            "tension": "380",
            "tensionUnit": "kV",
            "v": "200",
            "vUnit": "kV",
            "zone": "",
            "chargeSubstation": ""
          },
          "resultData": {
            "name": "",
            "nameSelected": true,
            "niveauTension": "",
            "niveauTensionSelected": true,
            "angleInit": "",
            "angleInitSelected": true,
            "puissanceActive": "",
            "puissanceActiveSelected": true,
            "puissanceReactive": "",
            "puissanceReactiveSelected": true
          },
          "displayForm": false,
          "markup": [
            {
              "tagName": "path",
              "selector": "line"
            }
          ],
          "source": {
            "anchor": {
              "name": "perpendicular"
            },
            "id": "5ed80c45-4d0b-4d7c-b983-691d3ddbf9ec"
          },
          "target": {
            "x": 920,
            "y": 560
          },
          "id": "5f98ecce-89a5-4260-97e6-7df658fa3584",
          "z": 6,
          "labels": [
            {
              "position": 0.5,
              "attrs": {
                "text": {
                  "text": "CH2",
                  "fill": "black"
                }
              }
            },
            {
              "position": 0.2,
              "attrs": {
                "text": {
                  "text": "380 kV",
                  "fill": "black"
                }
              }
            }
          ],
          "attrs": {
            "line": {
              "sourceMarker": {
                "r": 0,
                "cursor": "pointer"
              }
            }
          }
        }
      ]
    },
    "result": {
      "bus_data": [
        [
          "Nom bus",
          "Vbus",
          "Angle",
          "P",
          "Q",
          "PC",
          "QC",
          "b",
          "g",
          "Type de bus",
          "Qmax",
          "Qmin"
        ],
        [
          "Nom bus",
          "Voltage",
          "Angle",
          "Generation",
          "Load",
          "b",
          "g",
          "Type de bus",
          "Qmax",
          "Qmin"
        ],
        [
          "Id",
          "Mag",
          "Deg",
          "MW",
          "MVar",
          "MW",
          "MVar",
          "pu",
          "pu",
          "NA",
          "MVar",
          "MVar"
        ],
        [
          "1.000000e+000",
          "1.000000e+000",
          "0.000000e+000",
          "4.047217e-002",
          "2.519391e-002",
          "0.000000e+000",
          "0.000000e+000",
          "9.999000e+003",
          "-9.999000e+003",
          "3.800000e+002",
          "1.444000e+001",
          "9.500000e-001"
        ],
        [
          "2.000000e+000",
          "9.380826e-001",
          "-5.337196e+000",
          "0.000000e+000",
          "0.000000e+000",
          "4.000000e-002",
          "2.000000e-002",
          "9.999000e+003",
          "-9.999000e+003",
          "3.800000e+002",
          "1.444000e+001",
          "9.500000e-001"
        ]
      ],
      "line_data": [
        [
          "Bus de depart",
          "Bus d'arrivee",
          "R",
          "X",
          "1/2 b",
          "Tap changer",
          "Tension depart",
          "Tension arrivee"
        ],
        [
          "Line",
          "Power at bus & line flow",
          "Transformer",
          "Line loss"
        ],
        [
          "From",
          "To",
          "P MW",
          "Q Mvar",
          "S MVA",
          "tap",
          "Qlosses Mvar",
          "S losses MVA"
        ],
        [
          "1.000000e+000",
          "2.000000e+000",
          "2.077562e-001",
          "2.285319e+000",
          "0.000000e+000",
          "1.000000e+000",
          "0.000000e+000",
          "0.000000e+000",
          "0.000000e+000",
          "0.000000e+000",
          "3.800000e+002",
          "3.800000e+002"
        ]
      ]
    }
  }
  
console.log(json.loadflow(data1));

var end = +new Date();
console.log(`Execution time: ${end - start} ms`);
