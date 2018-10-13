var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var customer = {
        "ID": "42",
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
        "ID": "84",
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
        "ID": "42",
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
        "ID": "84",
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
        "ID": "168",
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
  res.send('Welcome to the FAR API!')
})

//customer
app.get('/customers/:id', function (req, res) {
    res.set('Location', '/customer/42')    
    res.json(customer)
})


app.head('/customers/:id', function (req, res) {
    res.set('Location', '/customer/42')
    res.end()
})

app.options('/customers/:id', function (req, res) {
    res.set('Allow', 'GET, PUT, DELETE, HEAD, OPTIONS')
    res.status(204)
    res.end()
})

app.put('/customers/:id', function (req, res) {
    res.set('Location', '/customer/42')
    res.json(customer)
})

app.delete('/customers/:id', function (req, res) {
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
    res.set('Allow', 'GET, HEAD, OPTIONS, POST')
    res.status(204)
    res.end()
})

app.post('/customers', function (req, res) {
    res.set('Location', '/customer/42')
    res.status(201)
    res.json(customer)
})

//submitorder
app.post('/orders', function (req, res) {
    res.set('Location', '/submitorder/84')
    res.status(201)
  res.json(order)
})

app.options('/orders', function (req, res) {
    res.set('Allow', 'POST, OPTIONS')
    res.status(204)
    res.end()
  })

app.listen(port, function () {
  console.log('FAR API listening on port ' + port)
})
