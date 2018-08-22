# Intro text on Orders
How to submit an order

## Customer ID
Use (Customers API)[https://example.net] to lookup the right customer

## Shipping Address
Use the (Address validator API)[https://example.net] during order capture from the user to make sure you have a valid address - orders with an invalid address witll be rejected

Note that the Country Code must be a valid _ISO 3166 alpha-3 country code_

## Payment Token
Use the (Payment API)[https://example.net] during order capture to invoke payment on behalf of the customer. Invalid tokens or tokens that have already been submitted as part of another order will fail the submission

## Shipping Method
1. UPS
2. USPS

## Item and Quantity
Use (Items API)[https://example.net] to lookup the right item during the order building stage. A Quantity that exceeds the available stock will fail the submission

## Succesful Orders
Succesful submission will return a new ID in the response