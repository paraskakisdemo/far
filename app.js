var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var customer = {
        "id": "42",
        "name": "Emmanuel Paraskakis",
        "address": {
            "street": "100 Oracle Pkwy",
            "locality": "Redwood City",
            "region": "CA",
            "postalCode": "94065",
            "country": "USA"
        },
        "phone": "1-800-555-1212"
    }
var order = {
        "id": "84",
        "customerID": "42",
        "shippingAddress": {
            "street": "100 Oracle Pkwy",
            "locality": "Redwood City",
            "region": "CA",
            "postalCode": "94065",
            "country": "USA"
        },
        "header": {
            "paymentToken": "6e113782-a186-11e8-b659-529269fb1459",
            "shippingMethodID": "1"
        },
        "detail": [
            {
                "itemID": "21",
                "quantity": 1
            },
            {
                "itemID": "11",
                "quantity": 2
            },
            {
                "itemID": "6",
                "quantity": 4
            }
        ]
    }

var customers = [
    {
        "id": "42",
        "name": "Emmanuel Paraskakis",
        "address": {
            "street": "100 Oracle Pkwy",
            "locality": "Redwood City",
            "region": "CA",
            "postalCode": "94065",
            "country": "USA"
        },
        "phone": "1-800-555-1212"
    },
    {
        "id": "84",
        "name": "Robert Wunderlich",
        "address": {
            "street": "100 Oracle Pkwy",
            "locality": "Redwood City",
            "region": "CA",
            "postalCode": "94065",
            "country": "USA"
        },
        "phone": "1-800-555-1212"
    },
    {
        "id": "168",
        "name": "Vikas Anand",
        "address": {
            "street": "100 Oracle Pkwy",
            "locality": "Redwood City",
            "region": "CA",
            "postalCode": "94065",
            "country": "USA"
        },
        "phone": "1-800-555-1212"
    }
]

//root
app.get('/', function (req, res) {
  res.send('Welcome to the FAS API!')
})

//customer
app.get('/customer/:id', function (req, res) {
    res.set('Location', '/customer/42')    
    res.json(customer)
})

app.post('/customer/:id', function (req, res) {
    res.set('Location', '/customer/42')
    res.status(201)
    res.json(customer)
})

app.head('/customer/:id', function (req, res) {
    res.set('Location', '/customer/42')
    res.end()
})

app.options('/customer/:id', function (req, res) {
    res.set('Allow', 'GET,POST,PUT,DELETE,HEAD,OPTIONS')
    res.status(204)
    res.end()
})

app.put('/customer/:id', function (req, res) {
    res.set('Location', '/customer/42')
    res.json(customer)
})

app.delete('/customer/:id', function (req, res) {
    res.status(204)
    res.end()
})

//customers
app.get('/customers', function (req, res) {
    res.json(customers)
})

app.head('/customers', function (req, res) {
    res.end()
})

app.options('/customers', function (req, res) {
    res.set('Allow', 'GET, HEAD, OPTIONS')
    res.status(204)
    res.end()
})

//submitorder
app.post('/submitorder', function (req, res) {
    res.set('Location', '/submitorder/84')
    res.status(201)
  res.json(order)
})

app.options('/submitorder', function (req, res) {
    res.set('Allow', 'POST,OPTIONS')
    res.status(204)
    res.end()
  })

app.listen(port, function () {
  console.log('FAR API listening on port ' + port)
})