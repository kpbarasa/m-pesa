# m-pesa
m-pesa daraja api 

<p>
Simple eccommerce checkout back-end appllication with: Authentication, Shopping Cart processing, Sale transaction processing(PayPal, Stripe & M-Pesa API), Couppon discount options and Shipping processing.
</p>

1. Endpoints authentication
   1. Authenticate user
   2. Authenticate orders
   3. Authenticate Sales trans actions 


<h5>APP COMPONENETS :-<h5>
<h5>1. NODE DEPENDENCIES =========================================================================<h5>
<p>
"@paypal/checkout-server-sdk": "^1.0.3",

"axios": "^0.26.1",

"body-parser": "^1.19.2",

"cors": "^2.8.5",

"dotenv": "^16.0.0",

"ejs": "^3.1.6",

"express": "^4.17.3",

"mongoose": "^6.2.3",

"request": "^2.88.2", 
</p>

<h5>
<h5>
Git ignore files ===============================================================================

1.    node_module

2.    .env

<h5>

<h5>Features present in the app :-<h5>

<p>
Simple eccommerce checkout back-end appllication with: Authentication, Shopping Cart processing, Sale transaction processing(PayPal, Stripe & M-Pesa API), Couppon discount options and Shipping processing.
</p>

1. Endpoints authentication
   1. Authenticate user
   2. Authenticate orders
   3. Authenticate Sales trans actions 



<h5>APPP COMPONENETS INDEX:-<h5> 

1.NODE DEPENDENCIES

2.MIDDLEWARE

3.MODELS

4.VIEWS

5.PUBLIC files

6.ENV

7.CONTROLLERS

  7.1 CONTROLLERS PAYMENT

8.ROUTES/ENDPOINTS 

 
<h5>APP COMPONENETS :-<h5>
<h5>1. NODE DEPENDENCIES =========================================================================<h5>
<p>
"@paypal/checkout-server-sdk": "^1.0.3",

"axios": "^0.26.1",

"cookie-parser": "^1.4.6",

"cors": "^2.8.5",

"dotenv": "^16.0.0",

"express": "^4.17.3",

"mongoose": "^6.2.3",

"request": "^2.88.2",

"stripe": "^8.205.0"
</p>

<h5>
<h5>

1. Git ignore files ===============================================================================

      node_module

      .env

<h5>

2. env  ============================================================================
</h5>

      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

      SAFARICOM_AUTH_TOKEN=<token here>
      SAFARICOM_CLIENT_URL=https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials


      COOKIE_SECRETE=<secrete here>
    


<h5>


3. ROUTES/ENDPOINTS ============================================================================

 Routes:

</h5>
<p> 

3.1   Route:  /access_token

      type: Get

      Response-:
            {

                  "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

            }

3.2 Route:  /validation

      type: Post

      Response-:
            {

                  "status_code": 200, // or 400

                  "description": "Validated" // or "Failed"

            }

3.3 Route:  /register_url

      type: Get
  
      Response-:
            {

               "OriginatorCoversationID": "64441-43124039-1",
               "ResponseCode": "0",
               "ResponseDescription": "Accept the service request successfully."

            }

3.4 Route:  /balance

      type: Post

      Response-:
            {

               "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

            }

3.5 Route:  /stk

      type: Get

      Response-:
            {

               "ConversationID": "AG_20191219_000043fdf61864fe9ff5",
               "OriginatorCoversationID": "16738-27456357-1",
               "ResponseDescription": "Accept the service request successfully."

            }

3.6 Route:  /bal_Response

      type: Post

      Response-:
            {

                  "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

            }


3.7 Route:  /bal_timeout

      type: Post

      Response-:
            {
 
                  "requestId": "11728-2929992-1",
                  "errorCode": "401.002.01",
                  "errorMessage": "Error Occurred "

            }

3.8 Route:  /stk_callback

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




