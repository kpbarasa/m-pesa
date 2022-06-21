# m-pesa
m-pesa daraja api 

<p>
    Simple mpesa back end API that exposses endpoints that allow for Mpesa transactions Customer to business(C2B).
</p>

1. Endpoints authentication
   No Authentication


<h5>APP COMPONENETS :-<h5>
<h5>1. NODE DEPENDENCIES =========================================================================<h5>
<p>
    <b>Dev dependencies:<b> </br>

    "body-parser": "^1.19.2",

    "cors": "^2.8.5",

    "dotenv": "^16.0.0",

    "express": "^4.17.3",

    "mongoose": "^6.2.3",

    "request": "^2.88.2"
</p>
<p>
    <b> dependencies:<b> </br>

    "nodemon": "^2.0.15"
</p>

<h5>
<h5>
Git ignore files ===============================================================================

1.    node_module

2.    .env

<h5>


2. env  ============================================================================
</h5>

      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

      SAFARICOM_AUTH_TOKEN=<token here>
      SAFARICOM_CLIENT_URL=https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials


      COOKIE_SECRETE=<secrete here>
    


<h5>



2. app.js  ============================================================================
</h5>

1. Port
2. Database connection string
3. Components/Routes M-Pesa(C2B M-Pesa)

     1.  Register URL </br>
         Register validation and confirmation URLs on M-Pesa
     2.  Confirmation </br>
         Register validation and confirmation URLs on M-Pesa
     3.  Validation </br>
         Register validation and confirmation URLs on M-Pesa
     4.  Simulate </br>
         Register validation and confirmation URLs on M-Pesa
     5.  Balance </br>
         Register validation and confirmation URLs on M-Pesa


4. Components(C2B lipa na M-Pesa)
   
   <ul>
      <li>LIPA NA MPESA C2B </li>
      <li>Bal result</li>
      <li>Bal timeout</li>
      <li>Stk callback</li>
   </ul>

4. Middle ware
   
   <ul>
      <li> 
       Access token
      </li>
   </ul>
    


<h5>


3. ROUTES/ENDPOINTS ============================================================================

 Routes:

</h5>
<p> 

3.1  Middleware (app.js)

      type: Get 

      Response-:
            {

                  "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

            }

3.2 Route:  /validation (app.js)

      type: Post

      Response-:
            {

                  "status_code": 200, // or 400

                  "description": "Validated" // or "Failed"

            }

3.3 Route:  /register_url (app.js)

      type: Get
  
      Response-:
            {

               "OriginatorCoversationID": "64441-43124039-1",
               "ResponseCode": "0",
               "ResponseDescription": "Accept the service request successfully."

            } 

3.4 Route:  /stk (app.js)

      type: Get

      Response-:
            {

               "ConversationID": "AG_20191219_000043fdf61864fe9ff5",
               "OriginatorCoversationID": "16738-27456357-1",
               "ResponseDescription": "Accept the service request successfully."

            } 


3.5 Route:  /bal_timeout (app.js)

      type: Post

      Response-:
            {
 
                  "requestId": "11728-2929992-1",
                  "errorCode": "401.002.01",
                  "errorMessage": "Error Occurred "

            }

3.6 Route:  /stk_callback  (app.js)

      type: Get

      Response-:
            {
  
               "Body": {        

                     "stkCallback": {     

                     "MerchantRequestID": "29115-34620561-1",   

                     "CheckoutRequestID": "ws_CO_191220191020363925", 
                               
                     "ResultCode": 0,            

                     "ResultDesc": "The service request is processed successfully.",

                     "CallbackMetadata": {         

                     "Item": [{              

                           "Name": "Amount",    

                            "Value": 1.00      

                           },                  

                           {                  

                              "Name": "MpesaReceiptNumber",  

                              "Value": "NLJ7RT61SV"        

                           },                    

                           {                        

                              "Name": "TransactionDate", 

                              "Value": 20191219102115    

                           },                   

                           {                       

                              "Name": "PhoneNumber",  


                              "Value": 254708374149      

                     }]            

                     }        

                     }    
                   }

            }

3.9 function accessaccess
      
      function -: 

                if (req.access_token = JSON.parse(body).access_token)

                return next()
      Response-:
            {

                  "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

            }
</p>




