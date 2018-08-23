var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var seats = [
    {
        "section": "Section 115",
        "row": "3",
        "available": true,
        "price": 299,
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/D2BA28E8C506DC0CDA4F9C14F6C3FF17C1177E4725F3?allowInterrupt=1"
        }
    },
    {
        "section": "Section 216",
        "row": "7",
        "available": true,
        "price": 219,
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/D2BA28E8C506DC0CDA4F9C14F6C3FF17C1177E4725F3?allowInterrupt=1"
        }
    },
    {
        "section": "Section 229",
        "row": "12",
        "available": true,
        "price": 146,
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/DF03AD812F69F02A82C04FC2F6C3FF17C1177E4725F3?allowInterrupt=1"
        }
    }
]

var beers = [
    {
        "name": "Guiness",
        "description": "No preservatives or additives. 100% natural, ingredients create a unique flavour",
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/D2680B911AEB03B8C3B6EF22F6C3FF17C1177E4725F3?RevLabel=LATEST&allowInterrupt=1"
        }
    },
    {
        "name": "Pilsner Urquell",
        "description": "World's first pilsner. Grainy malt center with a light touch of butter flavor",
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/D38CC50D762E50731F505711F6C3FF17C1177E4725F3?RevLabel=LATEST&allowInterrupt=1"
        }
    },
    {
        "name": "Schlappe-Seppel",
        "description": "Smooth bitter, tangy, fruity, full-bodied - more than a beer, it's an attitude",
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/DFE12285193404897A6331F4F6C3FF17C1177E4725F3?RevLabel=LATEST?allowInterrupt=1"
        }
    },
                {
        "name": "Heineken",
        "description": "Crisp, clean and refreshing, this popular beer is a classic European style Lager",
        "link": {
            "rel": "image",
            "href": "https://publicdocs-corp.documents.us2.oraclecloud.com/documents/link/LF7206C60A9212DA72124CA9F6C3FF17C1177E4725F3/file/DE79A523EC91B0687D5AA852F6C3FF17C1177E4725F3?dRevLabel=LATEST&allowInterrupt=1"
        }
    }
]

app.get('/', function (req, res) {
  res.send('Welcome to the Chatbot API!')
})

app.get('/seats', function (req, res) {
  res.json(seats)
})

app.get('/beer', function (req, res) {
  res.json(beers)
})

app.listen(port, function () {
  console.log('Chatbot API listening on port ' + port)
})