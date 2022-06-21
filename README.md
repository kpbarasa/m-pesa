# m-pesa
m-pesa daraja api 
    =========================================================================

<p>
    Simple mpesa back end API that exposses endpoints that allow for Mpesa transactions Customer to business(C2B).
</p>

1. Endpoints authentication
   Mpesa Access token Middle ware


# APP COMPONENETS 
    =========================================================================

# 1.NODE DEPENDENCIES 
      <p>

      <b>Dependencies:<b> </br>

            "body-parser": "^1.19.2",

            "cors": "^2.8.5",

            "dotenv": "^16.0.0",

            "express": "^4.17.3",

            "mongoose": "^6.2.3",

            "request": "^2.88.2"

      </p>

      <p>
            <b>Dev dependencies:<b> </br>
            "nodemon": "^2.0.15"
      </p>


# 2. Git ignore files 

      1.    node_module

      2.    .env




# 3.env  

      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

      SAFARICOM_AUTH_TOKEN=<token here>
      SAFARICOM_CLIENT_URL=https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials


      COOKIE_SECRETE=<secrete here>
    


<h5>



# 4.app.js  

</h5>

#  4.1 Port
      =============================================================================

# 4.2 Database connection string
      =============================================================================

# 4.3 Components/Routes M-Pesa(C2B M-Pesa)
     =============================================================================
     <p>
     <b>Componnent: Register URL </b> 
     </br>
     <b>Url: /register_url </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     <p>
     6.3 Route:  /register_url (app.js)

      type: Get
  
      Response-:
            {

               "OriginatorCoversationID": "64441-43124039-1",
               "ResponseCode": "0",
               "ResponseDescription": "Accept the service request successfully."

            } 
     </P>
     ---------------------------------------------------------
     <p>
     <b>Componnent: Confirmation </b> 
     </br>
     <b>Url: /register_url </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     ---------------------------------------------------------
     <p>
     <b>Componnent: Validation </b> 
     </br>
     <b>Url: /Validation </b> 
     </br>
         validation and confirmation URLs on M-Pesa
     </p>
     <p>
            6.2 Route:  /validation (app.js)

                  type: Post

                  Response-:
                  {

                        "status_code": 200, // or 400

                        "description": "Validated" // or "Failed"

                  }
           
     </p>
     ---------------------------------------------------------
     <p>
     <b>Componnent: Simulate </b>  
     </br>
     <b>Url: /simulate </b> 
     </br>
         Make payment requests from Client to Business (C2B). Simulate is available on sandbox only
     </p>
     ---------------------------------------------------------

     <p>
     <b>Componnent: Balance </b>
     </br>
     <b>Url: /balance </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     ---------------------------------------------------------


# 4.4 Components(C2B lipa na M-Pesa)
    =============================================================================

     <p>
     <b>Componnent: Lipa Na M-Pesa C2B </b>
     </br>
     <b>Url: /stk </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     <p>

      Route:  /stk (app.js)

            type: Get

            Response-:
                  {

                        "ConversationID": "AG_20191219_000043fdf61864fe9ff5",
                        "OriginatorCoversationID": "16738-27456357-1",
                        "ResponseDescription": "Accept the service request successfully."

                  } 
     </p>
     ---------------------------------------------------------

     <p>
     <b>Componnent: Bal result </b>
     </br>
     <b>Url: /bal_result </b> 
     </br>
         On successfull lipa na M-Pesa transaction returns result 
     </p>
     <p>

     </p>
     ---------------------------------------------------------

     <p>
     <b>Componnent: Bal timeout </b>
     </br>
     <b>Url: /bal_timeout </b> 
     </br>
         On Unsuccessfull lipa na M-Pesa transaction returns time out 
     </p>

     <p>

            6.5 Route:  /bal_timeout (app.js)

                  type: Post

                  Response-:
                        {
 
                              "requestId": "11728-2929992-1",
                              "errorCode": "401.002.01",
                              "errorMessage": "Error Occurred "

                        }
     </p>
     ---------------------------------------------------------

     <p>
     <b>Componnent: Stk callback </b>
     </br>
     <b>Url: /stk_callback </b> 
     </br>
         On successfull lipa na M-Pesa transaction returns result 



     </p>

     <p>    
            6.6 Route:  /stk_callback  (app.js)

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

     </p>
     ---------------------------------------------------------

     <p>
     <b>Componnent: Dynamic M-Pesa QR </b>
     </br>
     <b>Url: /stk/Qr-code </b> 
     </br>
         Use this API to generate a Dynamic QR which enables Safaricom M-PESA customers who have smartphones and use LIPA NA M-PESA as their preferred mode of payment, to scan a QR (Quick Response) code.
     </p>
     ---------------------------------------------------------

# 5.Middle ware
  =============================================================================
   
   <ul>
      <li> 
       Access token
      </li>
   </ul>
   <p> 

      6.1  Middleware (app.js)

            type: Get 

            Response-:
                  {

                        "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

                  }
            
   </p>
     ---------------------------------------------------------
    

<h5>




