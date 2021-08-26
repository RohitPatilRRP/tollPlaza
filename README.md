## Steps To Run

Frontend
- cd into frontend/tollplaza
- Run npm install
- Run npm start
- (Optional) Add Moesif CORS extension in chrome to avoid CORS errors.
- Server will start at 127.0.0.1:8080

Backend
-cd in Backend
-Run npm install
-Run npm test for testing APIs
-Run npm start
-Server will start at 127.0.0.1:8081

API Test results

```
> mocha test/test.js

  API tests
    ✔ checking server health
    ✔ should create receipt for vehicle
    ✔ should validate receipt for vehicle

  3 passing (60ms)

```
![alt text](https://github.com/RohitPatilRRP/tollPlaza/blob/main/screenshots/generate.png)

##Validate Receipt
![alt text](https://github.com/RohitPatilRRP/tollPlaza/blob/main/screenshots/validate.png)