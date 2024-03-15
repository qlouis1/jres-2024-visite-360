var APP_DATA = {
  "stairs": {
    "str-ouest": {
      "target": [
        "img-54",
        "img-46",
        "img-39",
        "img-26",
        "img-22",
        "img-14",
        "img-09",
        "img-07",
        "img-01"
      ]
    },
    "str-est": {
      "target": [
        "img-51",
        "img-50",
        "img-43",
        "img-30",
        "img-26",
        "img-25"
      ]
    },
    "str-mezzanine": {
      "target": [
        "img-31",
        "img-01",
        "img-15"
      ]
    },
    "str-escalator": {
      "target": [
        "img-17",
        "img-08",
        "img-02"
      ]
    },
    "str-nord": {
      "target": [
        "img-55",
        "img-33",
        "img-18"
      ]
    },
    "str-sud": {
      "target": [
        "img-57",
        "img-56",
        "img-34",
        "img-33",
        "img-31",
        "img-15"
      ]
    }
  },
  "scenes": [
    {
      "id": "img-01",
      "name": "Grand Foyer",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 10,
          "pitch": 1.85,
          "rotation": 0,
          "target": [
            "img-02"
          ]
        },
        {
          "type": "nav",
          "yaw": 29.02,
          "pitch": 2.28,
          "rotation": 0,
          "target": [
            "img-03",
            "img-04"
          ]
        },
        {
          "type": "nav",
          "yaw": -92,
          "pitch": 2.9,
          "rotation": 0,
          "target": [
            "img-05"
          ]
        },
        {
          "type": "nav",
          "yaw": 176.8,
          "pitch": 2.3,
          "rotation": 0,
          "target": [
            "img-06"
          ]
        },
        {
          "type": "stairs",
          "yaw": -151,
          "pitch": 1.63,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "stairs",
          "yaw": 0.165,
          "pitch": -2.8,
          "rotation": 0,
          "target": "str-mezzanine"
        }
      ]
    },
    {
      "id": "img-02",
      "name": "Vestiaires du Grand Auditorium",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 127.3,
          "pitch": 1.65,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        },
        {
          "type": "nav",
          "yaw": 86.9,
          "pitch": 5.2,
          "rotation": 0,
          "target": [
            "img-03"
          ]
        },
        {
          "type": "nav",
          "yaw": 43.8,
          "pitch": 1.08,
          "rotation": 0,
          "target": [
            "img-03"
          ]
        },
        {
          "type": "stairs",
          "yaw": -78.24,
          "pitch": 3.69,
          "rotation": 0,
          "target": "str-escalator"
        }
      ]
    },
    {
      "id": "img-03",
      "name": "Grand Auditorium",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 39.03,
          "pitch": 8.56,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        },
        {
          "type": "nav",
          "yaw": -127.1,
          "pitch": -3.8,
          "rotation": 0,
          "target": [
            "img-02"
          ]
        },
        {
          "type": "nav",
          "yaw": 107.1,
          "pitch": -2.4,
          "rotation": 0,
          "target": [
            "img-02"
          ]
        },
        {
          "type": "nav",
          "yaw": -7.2,
          "pitch": 8.4,
          "rotation": 0,
          "target": [
            "img-04"
          ]
        }
      ]
    },
    {
      "id": "img-04",
      "name": "Grand Auditorium (scène)",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 117.12,
          "pitch": 2.01,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        },
        {
          "type": "nav",
          "yaw": 178,
          "pitch": 0.5,
          "rotation": 0,
          "target": [
            "img-03"
          ]
        }
      ]
    },
    {
      "id": "img-05",
      "name": "Salle Carré",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -75.9,
          "pitch": 2.8,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        }
      ]
    },
    {
      "id": "img-06",
      "name": "Cour extérieure",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -0.75,
          "pitch": 1.36,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        },
        {
          "type": "nav",
          "yaw": -159.14,
          "pitch": 3.2,
          "rotation": 0,
          "target": [
            "img-07"
          ]
        }
      ]
    },
    {
      "id": "img-07",
      "name": "Salle 01",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 138.34,
          "pitch": 6.14,
          "rotation": 0,
          "target": [
            "img-06"
          ]
        },
        {
          "type": "stairs",
          "yaw": -28.52,
          "pitch": 3.81,
          "rotation": 0,
          "target": "str-ouest"
        }
      ]
    },
    {
      "id": "img-08",
      "name": "Mezzanine",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 68.38,
          "pitch": 2.48,
          "rotation": 0,
          "target": [
            "img-09"
          ]
        },
        {
          "type": "nav",
          "yaw": -11.95,
          "pitch": 8.24,
          "rotation": 0,
          "target": [
            "img-15"
          ]
        },
        {
          "type": "nav",
          "yaw": -87.42,
          "pitch": 1.89,
          "rotation": 0,
          "target": [
            "img-60"
          ]
        },
        {
          "type": "stairs",
          "yaw": -165.87,
          "pitch": 1.87,
          "rotation": 0,
          "target": "str-escalator"
        }
      ]
    },
    {
      "id": "img-09",
      "name": "Couloirs",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -92.93,
          "pitch": 6.33,
          "rotation": 0,
          "target": [
            "img-13",
            "img-12",
            "img-11",
            "img-10"
          ]
        },
        {
          "type": "nav",
          "yaw": -178.25,
          "pitch": 4.17,
          "rotation": 0,
          "target": [
            "img-08"
          ]
        },
        {
          "type": "stairs",
          "yaw": 1.51,
          "pitch": 0.9,
          "rotation": 0,
          "target": "str-ouest"
        }
      ]
    },
    {
      "id": "img-10",
      "name": "Salle 06",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -42.77,
          "pitch": 3.82,
          "rotation": 0,
          "target": [
            "img-09"
          ]
        }
      ]
    },
    {
      "id": "img-11",
      "name": "Salle 05",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 123.24,
          "pitch": 4.42,
          "rotation": 0,
          "target": [
            "img-09"
          ]
        }
      ]
    },
    {
      "id": "img-12",
      "name": "Salle 04",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -98.16,
          "pitch": 3.76,
          "rotation": 0,
          "target": [
            "img-09"
          ]
        }
      ]
    },
    {
      "id": "img-13",
      "name": "Salle 03",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 91.4,
          "pitch": 4.17,
          "rotation": 0,
          "target": [
            "img-09"
          ]
        }
      ]
    },
    {
      "id": "img-14",
      "name": "Salle 02",
      "level": "-1",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": -31,
          "pitch": 2.96,
          "rotation": 0,
          "target": "str-ouest"
        }
      ]
    },
    {
      "id": "img-15",
      "name": "Mezzanine : passage",
      "level": "-1",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": -129.88,
          "pitch": 2.79,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": 2.65,
          "pitch": 25.89,
          "rotation": 0,
          "target": [
            "img-01"
          ]
        },
        {
          "type": "nav",
          "yaw": 121.36,
          "pitch": 0.73,
          "rotation": 0,
          "target": [
            "img-08"
          ]
        },
        {
          "type": "nav",
          "yaw": -177.22,
          "pitch": -12.22,
          "rotation": 0,
          "target": [
            "img-31"
          ]
        }
      ]
    },
    {
      "id": "img-16",
      "name": "Entrée piétonne place Sainte-Anne",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 29.33,
          "pitch": 0.99,
          "rotation": 0,
          "target": [
            "img-17"
          ]
        }
      ]
    },
    {
      "id": "img-17",
      "name": "Accueil",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 168.64,
          "pitch": 3.1,
          "rotation": 0,
          "target": [
            "img-16"
          ]
        },
        {
          "type": "nav",
          "yaw": 24.44,
          "pitch": 2.64,
          "rotation": 0,
          "target": [
            "img-29"
          ]
        },
        {
          "type": "nav",
          "yaw": 2.66,
          "pitch": 1.51,
          "rotation": 0,
          "target": [
            "img-31"
          ]
        },
        {
          "type": "stairs",
          "yaw": -139.21,
          "pitch": 25.35,
          "rotation": 0,
          "target": "str-escalator"
        }
      ]
    },
    {
      "id": "img-18",
      "name": "Atrium",
      "level": "RDC",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 167.8,
          "pitch": 1.72,
          "rotation": 0,
          "target": "str-nord"
        },
        {
          "type": "nav",
          "yaw": 92.14,
          "pitch": 3.37,
          "rotation": 0,
          "target": [
            "img-19"
          ]
        },
        {
          "type": "nav",
          "yaw": -164.9,
          "pitch": 1.05,
          "rotation": 0,
          "target": [
            "img-20",
            "img-21"
          ]
        },
        {
          "type": "nav",
          "yaw": -11.95,
          "pitch": 1.99,
          "rotation": 0,
          "target": [
            "img-23",
            "img-29"
          ]
        },
        {
          "type": "nav",
          "yaw": 9.78,
          "pitch": 1.74,
          "rotation": 0,
          "target": [
            "img-31"
          ]
        },
        {
          "type": "nav",
          "yaw": 36.15,
          "pitch": -10.3,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        }
      ]
    },
    {
      "id": "img-19",
      "name": "La Halle - 0",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -42.83,
          "pitch": 1.49,
          "rotation": 0,
          "target": [
            "img-18"
          ]
        },
        {
          "type": "nav",
          "yaw": 19.02,
          "pitch": 1.61,
          "rotation": 0,
          "target": [
            "img-31"
          ]
        },
        {
          "type": "nav",
          "yaw": 10.37,
          "pitch": 0.97,
          "rotation": 0,
          "target": [
            "img-23",
            "img-29"
          ]
        },
        {
          "type": "nav",
          "yaw": -27.57,
          "pitch": -1.48,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        }
      ]
    },
    {
      "id": "img-20",
      "name": "Réfectoire",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -2.52,
          "pitch": 1.47,
          "rotation": 0,
          "target": [
            "img-21"
          ]
        },
        {
          "type": "nav",
          "yaw": -13.48,
          "pitch": 2.01,
          "rotation": 0,
          "target": [
            "img-18"
          ]
        },
        {
          "type": "nav",
          "yaw": 99.76,
          "pitch": 6.11,
          "rotation": 0,
          "target": [
            "img-22"
          ]
        }
      ]
    },
    {
      "id": "img-21",
      "name": "Salle 07",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 65.07,
          "pitch": 5,
          "rotation": 0,
          "target": [
            "img-18"
          ]
        },
        {
          "type": "nav",
          "yaw": 15.23,
          "pitch": 2.56,
          "rotation": 0,
          "target": [
            "img-20"
          ]
        },
        {
          "type": "nav",
          "yaw": -119.69,
          "pitch": 4.74,
          "rotation": 0,
          "target": [
            "img-26"
          ]
        }
      ]
    },
    {
      "id": "img-22",
      "name": "Galerie Ouest",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 5.7,
          "pitch": 1.31,
          "rotation": 0,
          "target": [
            "img-26"
          ]
        },
        {
          "type": "stairs",
          "yaw": -0.7,
          "pitch": 1.31,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "nav",
          "yaw": -7.1,
          "pitch": 1.31,
          "rotation": 0,
          "target": [
            "img-21"
          ]
        },
        {
          "type": "nav",
          "yaw": -179.34,
          "pitch": 5.6,
          "rotation": 0,
          "target": [
            "img-23"
          ]
        },
        {
          "type": "nav",
          "yaw": -159.38,
          "pitch": 4.47,
          "rotation": 0,
          "target": [
            "img-20"
          ]
        },
        {
          "type": "nav",
          "yaw": 145.16,
          "pitch": 4.46,
          "rotation": 0,
          "target": [
            "img-27"
          ]
        }
      ]
    },
    {
      "id": "img-23",
      "name": "Galerie Sud",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 169.81,
          "pitch": 3.43,
          "rotation": 0,
          "target": [
            "img-18",
            "img-29"
          ]
        },
        {
          "type": "nav",
          "yaw": -153.23,
          "pitch": 3.32,
          "rotation": 0,
          "target": [
            "img-22"
          ]
        },
        {
          "type": "nav",
          "yaw": 1.55,
          "pitch": 5.65,
          "rotation": 0,
          "target": [
            "img-24"
          ]
        },
        {
          "type": "nav",
          "yaw": 95.99,
          "pitch": 4.35,
          "rotation": 0,
          "target": [
            "img-29"
          ]
        }
      ]
    },
    {
      "id": "img-24",
      "name": "Chapelle Saint-Joseph",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -91.27,
          "pitch": 6.58,
          "rotation": 0,
          "target": [
            "img-23"
          ]
        },
        {
          "type": "nav",
          "yaw": 5.21,
          "pitch": 4.4,
          "rotation": 0,
          "target": [
            "img-25"
          ]
        },
        {
          "type": "nav",
          "yaw": 78.86,
          "pitch": 1.17,
          "rotation": 0,
          "target": [
            "img-45"
          ]
        }
      ]
    },
    {
      "id": "img-25",
      "name": "Galerie Est",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 4.38,
          "pitch": 0.23,
          "rotation": 0,
          "target": [
            "img-24"
          ]
        },
        {
          "type": "stairs",
          "yaw": -176.2,
          "pitch": 0.81,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "nav",
          "yaw": 171.44,
          "pitch": 2.02,
          "rotation": 0,
          "target": [
            "img-26"
          ]
        },
        {
          "type": "nav",
          "yaw": 80.38,
          "pitch": 5.96,
          "rotation": 0,
          "target": [
            "img-27"
          ]
        },
        {
          "type": "nav",
          "yaw": -158.02,
          "pitch": 4.35,
          "rotation": 0,
          "target": [
            "img-30"
          ]
        }
      ]
    },
    {
      "id": "img-26",
      "name": "Galerie Nord",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -176.22,
          "pitch": 2.04,
          "rotation": 0,
          "target": [
            "img-25"
          ]
        },
        {
          "type": "stairs",
          "yaw": 168.23,
          "pitch": 1.35,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "stairs",
          "yaw": 1.73,
          "pitch": 1.54,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "nav",
          "yaw": -4.21,
          "pitch": 1.54,
          "rotation": 0,
          "target": [
            "img-21"
          ]
        },
        {
          "type": "nav",
          "yaw": -11.45,
          "pitch": 1.54,
          "rotation": 0,
          "target": [
            "img-22"
          ]
        },
        {
          "type": "nav",
          "yaw": -23.84,
          "pitch": 3.45,
          "rotation": 0,
          "target": [
            "img-27"
          ]
        }
      ]
    },
    {
      "id": "img-27",
      "name": "Jardin du Cloître",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 54.89,
          "pitch": 0.06,
          "rotation": 0,
          "target": [
            "img-22"
          ]
        },
        {
          "type": "nav",
          "yaw": -125.8,
          "pitch": 1.19,
          "rotation": 0,
          "target": [
            "img-25"
          ]
        },
        {
          "type": "nav",
          "yaw": 159.24,
          "pitch": 1.93,
          "rotation": 0,
          "target": [
            "img-26"
          ]
        }
      ]
    },
    {
      "id": "img-28",
      "name": "La Nef",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -3.1,
          "pitch": 3.92,
          "rotation": 0,
          "target": [
            "img-29"
          ]
        }
      ]
    },
    {
      "id": "img-29",
      "name": "La Nef (scène)",
      "level": "RDC",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 144.87,
          "pitch": 3.12,
          "rotation": 0,
          "target": [
            "img-17"
          ]
        },
        {
          "type": "nav",
          "yaw": -151.02,
          "pitch": 2.85,
          "rotation": 0,
          "target": [
            "img-18",
            "img-23"
          ]
        },
        {
          "type": "nav",
          "yaw": -49.78,
          "pitch": 1.31,
          "rotation": 0,
          "target": [
            "img-23"
          ]
        },
        {
          "type": "nav",
          "yaw": 3.33,
          "pitch": 1.17,
          "rotation": 0,
          "target": [
            "img-28"
          ]
        }
      ]
    },
    {
      "id": "img-30",
      "name": "Salle 08",
      "level": "RDC",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 146.7,
          "pitch": 3.49,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "nav",
          "yaw": 79.26,
          "pitch": 4.89,
          "rotation": 0,
          "target": [
            "img-25"
          ]
        }
      ]
    },
    {
      "id": "img-31",
      "name": "Accès Mezzanine",
      "level": "RDC",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": -28.39,
          "pitch": -0.14,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": 95.25,
          "pitch": 7.66,
          "rotation": 0,
          "target": [
            "img-17"
          ]
        },
        {
          "type": "nav",
          "yaw": -8.95,
          "pitch": 1.23,
          "rotation": 0,
          "target": [
            "img-18"
          ]
        },
        {
          "type": "stairs",
          "yaw": 3.99,
          "pitch": 13.19,
          "rotation": 0,
          "target": "str-mezzanine"
        }
      ]
    },
    {
      "id": "img-45",
      "name": "Salle 9 : le Chœur",
      "level": "-2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -129.33,
          "pitch": 4.79,
          "rotation": 0,
          "target": [
            "img-24"
          ]
        }
      ]
    },
    {
      "id": "img-33",
      "name": "La Halle - 1",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -41.17,
          "pitch": 0.85,
          "rotation": 0,
          "target": [
            "img-35"
          ]
        },
        {
          "type": "stairs",
          "yaw": -47.77,
          "pitch": 0.82,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": -55.66,
          "pitch": 2.1,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        },
        {
          "type": "stairs",
          "yaw": 170.92,
          "pitch": 1.41,
          "rotation": 0,
          "target": "str-nord"
        },
        {
          "type": "nav",
          "yaw": -2.25,
          "pitch": 5.95,
          "rotation": 0,
          "target": [
            "img-34"
          ]
        }
      ]
    },
    {
      "id": "img-34",
      "name": "La Halle - 1 (fond)",
      "level": "+1",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 39.78,
          "pitch": -0.14,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": -2.41,
          "pitch": 6.67,
          "rotation": 0,
          "target": [
            "img-33"
          ]
        },
        {
          "type": "nav",
          "yaw": 89.09,
          "pitch": 1.54,
          "rotation": 0,
          "target": [
            "img-35"
          ]
        },
        {
          "type": "nav",
          "yaw": 20.95,
          "pitch": 0.42,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        }
      ]
    },
    {
      "id": "img-35",
      "name": "Salle 11",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 175.76,
          "pitch": 4.05,
          "rotation": 0,
          "target": [
            "img-34"
          ]
        },
        {
          "type": "nav",
          "yaw": -91.34,
          "pitch": 4.42,
          "rotation": 0,
          "target": [
            "img-36"
          ]
        }
      ]
    },
    {
      "id": "img-36",
      "name": "Terrasse",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -160.16,
          "pitch": 4.07,
          "rotation": 0,
          "target": [
            "img-35"
          ]
        },
        {
          "type": "nav",
          "yaw": -25.05,
          "pitch": 1.15,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        }
      ]
    },
    {
      "id": "img-37",
      "name": "Passage vers La Halle - 1",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 33.43,
          "pitch": 24.01,
          "rotation": 0,
          "target": [
            "img-18"
          ]
        },
        {
          "type": "nav",
          "yaw": -1.36,
          "pitch": 0.83,
          "rotation": 0,
          "target": [
            "img-33"
          ]
        },
        {
          "type": "nav",
          "yaw": -32.22,
          "pitch": 5.03,
          "rotation": 0,
          "target": [
            "img-36"
          ]
        },
        {
          "type": "nav",
          "yaw": 166.94,
          "pitch": 4.5,
          "rotation": 0,
          "target": [
            "img-38"
          ]
        }
      ]
    },
    {
      "id": "img-38",
      "name": "Les Dortoirs",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -154.37,
          "pitch": 3.18,
          "rotation": 0,
          "target": [
            "img-37"
          ]
        },
        {
          "type": "nav",
          "yaw": -4.38,
          "pitch": 2.27,
          "rotation": 0,
          "target": [
            "img-39"
          ]
        }
      ]
    },
    {
      "id": "img-39",
      "name": "Salon Ouest",
      "level": "+1",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": -36.98,
          "pitch": 2.97,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "nav",
          "yaw": 108.25,
          "pitch": 4.67,
          "rotation": 0,
          "target": [
            "img-38"
          ]
        },
        {
          "type": "nav",
          "yaw": -10.66,
          "pitch": 4.22,
          "rotation": 0,
          "target": [
            "img-40"
          ]
        }
      ]
    },
    {
      "id": "img-40",
      "name": "Couloir",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -95.44,
          "pitch": 6.15,
          "rotation": 0,
          "target": [
            "img-41",
            "img-42"
          ]
        },
        {
          "type": "nav",
          "yaw": 176.76,
          "pitch": 4.92,
          "rotation": 0,
          "target": [
            "img-39"
          ]
        },
        {
          "type": "nav",
          "yaw": -3.86,
          "pitch": 5.1,
          "rotation": 0,
          "target": [
            "img-43"
          ]
        }
      ]
    },
    {
      "id": "img-41",
      "name": "Salle 12",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 101.09,
          "pitch": 4.1,
          "rotation": 0,
          "target": [
            "img-40"
          ]
        }
      ]
    },
    {
      "id": "img-42",
      "name": "Salle 13",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -120.27,
          "pitch": 6.8,
          "rotation": 0,
          "target": [
            "img-40"
          ]
        }
      ]
    },
    {
      "id": "img-43",
      "name": "Salon Est",
      "level": "+1",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 138.09,
          "pitch": 3.62,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "nav",
          "yaw": 87.84,
          "pitch": 4.96,
          "rotation": 0,
          "target": [
            "img-40"
          ]
        },
        {
          "type": "nav",
          "yaw": 22.55,
          "pitch": 3,
          "rotation": 0,
          "target": [
            "img-44"
          ]
        }
      ]
    },
    {
      "id": "img-44",
      "name": "Salle 14",
      "level": "+1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 159.78,
          "pitch": 4.31,
          "rotation": 0,
          "target": [
            "img-43"
          ]
        }
      ]
    },
    {
      "id": "img-46",
      "name": "Salon Ouest",
      "level": "+2",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": -38.15,
          "pitch": 1.9,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "nav",
          "yaw": 8.05,
          "pitch": 4.45,
          "rotation": 0,
          "target": [
            "img-47"
          ]
        }
      ]
    },
    {
      "id": "img-47",
      "name": "Couloir",
      "level": "+2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -101.23,
          "pitch": 6.14,
          "rotation": 0,
          "target": [
            "img-48",
            "img-49"
          ]
        },
        {
          "type": "nav",
          "yaw": 173.84,
          "pitch": 2.59,
          "rotation": 0,
          "target": [
            "img-46"
          ]
        },
        {
          "type": "nav",
          "yaw": -6.41,
          "pitch": 0.83,
          "rotation": 0,
          "target": [
            "img-50"
          ]
        }
      ]
    },
    {
      "id": "img-48",
      "name": "Salle 18",
      "level": "+2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 110.2,
          "pitch": 6.71,
          "rotation": 0,
          "target": [
            "img-47"
          ]
        }
      ]
    },
    {
      "id": "img-49",
      "name": "Salle 19",
      "level": "+2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -54.61,
          "pitch": 4.33,
          "rotation": 0,
          "target": [
            "img-47"
          ]
        }
      ]
    },
    {
      "id": "img-50",
      "name": "Salon Est",
      "level": "+2",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 47.88,
          "pitch": 2.45,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "nav",
          "yaw": 0.98,
          "pitch": 4.44,
          "rotation": 0,
          "target": [
            "img-47"
          ]
        }
      ]
    },
    {
      "id": "img-51",
      "name": "Salon Est",
      "level": "+3",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 82.71,
          "pitch": -0.4,
          "rotation": 0,
          "target": "str-est"
        },
        {
          "type": "nav",
          "yaw": 0.09,
          "pitch": 6.89,
          "rotation": 0,
          "target": [
            "img-52"
          ]
        }
      ]
    },
    {
      "id": "img-52",
      "name": "Salle 21",
      "level": "+3",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -152.82,
          "pitch": 3.69,
          "rotation": 0,
          "target": [
            "img-51"
          ]
        },
        {
          "type": "nav",
          "yaw": -17.64,
          "pitch": 1.66,
          "rotation": 0,
          "target": [
            "img-53"
          ]
        }
      ]
    },
    {
      "id": "img-53",
      "name": "Salle 20",
      "level": "+3",
      "hotspots": [
        {
          "type": "nav",
          "yaw": 31.48,
          "pitch": 2.8,
          "rotation": 0,
          "target": [
            "img-52"
          ]
        },
        {
          "type": "nav",
          "yaw": 146.29,
          "pitch": 2.49,
          "rotation": 0,
          "target": [
            "img-54"
          ]
        }
      ]
    },
    {
      "id": "img-54",
      "name": "Salon Ouest",
      "level": "+3",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 8.85,
          "pitch": -0.5,
          "rotation": 0,
          "target": "str-ouest"
        },
        {
          "type": "nav",
          "yaw": 93.1,
          "pitch": 5.23,
          "rotation": 0,
          "target": [
            "img-53"
          ]
        }
      ]
    },
    {
      "id": "img-55",
      "name": "Salon Terrasse",
      "level": "+2",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 48.99,
          "pitch": -0.22,
          "rotation": 0,
          "target": "str-nord"
        },
        {
          "type": "nav",
          "yaw": 141.73,
          "pitch": 1.96,
          "rotation": 0,
          "target": [
            "img-56"
          ]
        }
      ]
    },
    {
      "id": "img-56",
      "name": "Le Belvédère",
      "level": "+2",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 63.14,
          "pitch": -0.15,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": -68.03,
          "pitch": 2.82,
          "rotation": 0,
          "target": [
            "img-55"
          ]
        },
        {
          "type": "nav",
          "yaw": 119.65,
          "pitch": 2.91,
          "rotation": 0,
          "target": [
            "img-57"
          ]
        },
        {
          "type": "nav",
          "yaw": 136.67,
          "pitch": 1.83,
          "rotation": 0,
          "target": [
            "img-59"
          ]
        }
      ]
    },
    {
      "id": "img-57",
      "name": "Les Horizons",
      "level": "+2",
      "hotspots": [
        {
          "type": "stairs",
          "yaw": 80.42,
          "pitch": -0.82,
          "rotation": 0,
          "target": "str-sud"
        },
        {
          "type": "nav",
          "yaw": -29.98,
          "pitch": 3.1,
          "rotation": 0,
          "target": [
            "img-56"
          ]
        },
        {
          "type": "nav",
          "yaw": -167.14,
          "pitch": 1.98,
          "rotation": 0,
          "target": [
            "img-58"
          ]
        }
      ]
    },
    {
      "id": "img-58",
      "name": "Terrasse",
      "level": "+2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -86.23,
          "pitch": 1.93,
          "rotation": 0,
          "target": [
            "img-57"
          ]
        },
        {
          "type": "nav",
          "yaw": -143.86,
          "pitch": 10.96,
          "rotation": 0,
          "target": [
            "img-59"
          ]
        }
      ]
    },
    {
      "id": "img-59",
      "name": "Terrasse",
      "level": "+2",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -104.35,
          "pitch": 1.36,
          "rotation": 0,
          "target": [
            "img-56"
          ]
        },
        {
          "type": "nav",
          "yaw": -90.78,
          "pitch": 4.09,
          "rotation": 0,
          "target": [
            "img-58"
          ]
        }
      ]
    },
    {
      "id": "img-60",
      "name": "Régie du Grand Auditorium",
      "level": "-1",
      "hotspots": [
        {
          "type": "nav",
          "yaw": -165.27,
          "pitch": 2.85,
          "rotation": 0,
          "target": [
            "img-08"
          ]
        }
      ]
    }
  ]
};