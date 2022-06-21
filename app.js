const express = require('express')  
const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('request')
const app = express()  


// Help connect to MongoDB database 
const mongoose = require('mongoose');
const { response } = require('express');
// const { buffer } = require('stream/consumers');

require('dotenv').config();

// 1. Port ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==================================================================================================================================
const port = process.env.PORT || 5000;


app.use(cors());

// parse form data
app.use(express.urlencoded({extended: false}))

// Parse Json 
app.use(express.json()) 

app.use(bodyParser.json())

// 2. Database connection string+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==================================================================================================================================
// Connection String to express atlas and Environment variable.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  
    useNewUrlParser: true, useUnifiedTopology: true 

  },err => { 
    if(err){
        console.log('Error un able Connected to MongoDB!!!')
    }
    else{
        console.log('Connected to MongoDB!!!')
    }
    }
)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); 
})

// ROUTES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3 Access token  ==================================================================================================================  
// ==================================================================================================================================
app.get('/access_token', access, (req, res) => { 
    res.status(200).json({access_token: req.access_token})
})

// Register URL  ====================================================================================================================  
// ==================================================================================================================================
app.get('/register_url', access, (req, res) => {
    let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    let auth = "Bearer " + req.access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "ShortCode": "600991",
                "ResponseType": "Complete",
                "ConfirmationURL": "http://197.248.86.122:801/confirmation",
                "ValidationURL": "http://197.248.86.122:801/validation"
            }
        },
        function (error, response, body) {
            if (error) { console.log(error) }
            res.status(200).json(body)
        }
    )
})

// Confirmation  ====================================================================================================================  
// ==================================================================================================================================
app.post('/confirmation', (req, res) => {
    console.log('....................... confirmation .............')
    console.log(req.body)
})

// Validation  ======================================================================================================================  
// ==================================================================================================================================
app.post('/validation', (req, res) => {
    console.log('....................... validation .............')
    console.log(req.body)
})

// Simulate  ========================================================================================================================  
// ==================================================================================================================================
app.get('/simulate', access_token_auth, (req, res) => {
    let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate"
    let auth = "Bearer " + req.access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "ShortCode": "600991",
                "CommandID": "CustomerPayBillOnline",
                "Amount": "100",
                "Msisdn": "254724628580",
                "BillRefNumber": "00000"
            }
        },
        function (error, response, body) {
            if (error) {
                console.log(error)
            }
            else {
                res.status(200).json(body)
            }
        }
    )
})

// Balance  ==========================================================================================================================  
// ===================================================================================================================================
app.get('/balance', access_token_auth, (req, resp) => {
    let url = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query"
    let auth = "Bearer " + req.access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "Initiator": "apitest342",
                "SecurityCredential": "JRWM6PlYNSpshLKFIPSxldqdSGCgqKzEi89pV6T0+g8lnqaNTRVXxNoGppo8eK0IgYH+ckbAP9ii8/kCsaCPKUR0+vuHCATevlsm2nXzoLWMA2SLenFfHQ5G6go+FvWrBTX6atpok4i7iVloTgzjM3gEEBJ5zvBmimpOD1sd5JM9jnTe5q4e5MvNevgMGo5S7h0Yc/XH2Ls8Dukets32ua89kABlIPtUEb4MnHw0kztjo658nBKF13sy5mt93PW9m4+gWS3pSDroNC2KeplyBLrdDtdCQr7ef5QDxIAZ3QPCgrIytrN0aGIApjWVpYzzJazP5EIq2mrnfI7DlNoCrQ==",
                "CommandID": "AccountBalance",
                "PartyA": "600991",
                "IdentifierType": "4",
                "Remarks": "bal",
                "QueueTimeOutURL": "http://197.248.86.122:801/bal_timeout",
                "ResultURL": "http://197.248.86.122:801/bal_result"
            }
        },
        function (error, response, body) {
            if (error) {
                console.log(error)
            }
            else {
                resp.status(200).json(body)
            }
        }
    )
})


function fullDate() {
    var date = new Date(),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2)
      day = ("0" + date.getDate()).slice(-2)
      hours = ("0"+date.getHours()).slice(-2)
      min =("0"+date.getMinutes()).slice(-2)
      secs = ("0"+date.getSeconds()).slice(-2)
    return date.getFullYear()+""+[mnth+""+day+""+hours+""+min+""+secs].join(",");
}


// LIPA NA MPESA C2B  ================================================================================================================  
// ===================================================================================================================================
app.get('/stk', access_token_auth, (req, res) => {
    
    const endpoint = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    let auth = "Bearer " + req.access_token
    let date = new Date()
    const phoneNo = "254703553986"
    const paybbilNo = "174379"
    const transactionType = "CustomerPayBillOnline"
    const transAmount ="1"
    const callBackURL ="https://d1c1-41-90-177-197.ngrok.io/stk_callback"
    const timestamp = fullDate() 
    const accountReference = "123Test"
    const transactionDesc = "paybill"
    const password = new Buffer.from('174379' + 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919' + timestamp).toString('base64')
    
    request(
        {
            url: endpoint,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {   
                "BusinessShortCode":paybbilNo,    
                "Password":password,   
                "Timestamp":timestamp,    
                "TransactionType":transactionType,    
                "Amount":transAmount,    
                "PartyA":phoneNo,    
                "PartyB":paybbilNo,    
                "PhoneNumber":phoneNo,    
                "CallBackURL":callBackURL,    
                "AccountReference":accountReference,    
                "TransactionDesc":transactionDesc
            }
        },
        function (error, response, body) {
            if (error) { 
                console.log(error)
            }
            else { 
                res.status(200).json(body)
            }
        }
    )
})

// Bal result
app.post('/bal_result', (req, res) => {
    console.log('.......... Account Balance ..................')
    console.log(req.body)
})

// Bal timeout
app.post('/bal_timeout', (req, res) => {
    console.log('.......... Timeout..................')
    console.log(req.body)
})

// Stk callback 

app.post('/stk_callback', (req, res) => {
    console.log('.......... STK Callback ..................')
    console.log(req.body.Body)
})

// MIDDLEWARE =======================================================================================================================
// Access token  ==================================================================================================================== 
// ================================================================================================================================== 
function access_token_auth(req, res, next){
    
    let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials" 
    let auth = new Buffer.from("Bjf0WQCCV6cT1sGUn2TDp9nmMP0aUcxS:Zcg4SEOP4fxTYbKK").toString('base64')
    
    request(
        {
            url: url, 
            headers: {
                'Authorization': 'Basic '+auth+'' 
            } 
        },
        function (error, response, body) {
            if (error) { 
                console.log(error) 
            }
            else{ 
                req.access_token = JSON.parse(body).access_token
                next()
            }
        }
    )

}


// Port 
app.listen(port) 