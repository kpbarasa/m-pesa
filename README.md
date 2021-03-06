# M-Pesa
M-Pesa daraja api 

<p>
    Simple mpesa back end API that exposses endpoints that allow for Mpesa transactions Customer to business(C2B).
</p>


# APP COMPONENETS 

# 1.NODE DEPENDENCIES 
<p>

<b>Dependencies:<b>

+  body-parser

+  cors

+  dotenv

+  express

+  mongoose

+  request

<b>Dev dependencies:<b> 

+   nodemon
</p>


# 2. Git ignore files 

+  node_module

+  .env




# 3.env  

      ```
      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

      SAFARICOM_AUTH_TOKEN=<token here>
      SAFARICOM_CLIENT_URL=https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials


      COOKIE_SECRETE=<secrete here>
      ```

# 4.app.js  

##  4.1 Port

## 4.2 Database connection string

```
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
```

## 4.3 Components/Routes M-Pesa(C2B M-Pesa)
<br>

### 4.3.1 Componnent: Register URL

   <p>
     </br>
     <b>Url: /register_url </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     
     ```
     6.3 Route:  /register_url (app.js)

      type: Get
  
      Response-:
            {

               "OriginatorCoversationID": "64441-43124039-1",
               "ResponseCode": "0",
               "ResponseDescription": "Accept the service request successfully."

            } 

     ---------------------------------------------------------------------------
     ```
<br>

### 4.3.2 Componnent: Confirmation 
   <p>  
     </br>
     <b>Url: /register_url </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
     </p>
     ----------------------------------------------------------------------------
<br>

### 4.3.3 Componnent: Validation  
   <p>  
     <b>Url: /Validation </b> 
     </br>
         validation and confirmation URLs on M-Pesa
     </p>
      ```
            6.2 Route:  /validation (app.js)

                  type: Post

                  Response-:
                  {

                        "status_code": 200, // or 400

                        "description": "Validated" // or "Failed"

                  }
           
     ----------------------------------------------------------------------------
     ```
<br>

### 4.3.4 Componnent: Simulate
   <p> 
     <b>Url: /simulate </b> 
     </br>
         Make payment requests from Client to Business (C2B). Simulate is available on sandbox only
   </p>
     ----------------------------------------------------------------------------
<br>

### 4.3.5 Componnent: Balance
   <p>  
     <b>Url: /balance </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
   </p>
     -----------------------------------------------------------------------------
<br>


## 4.4 Components(C2B lipa na M-Pesa)
### 4.4.1 Componnent: Bal result 

  <p>
     <b>Componnent: Lipa Na M-Pesa C2B </b>
     </br>
     <b>Url: /stk </b> 
     </br>
         Register validation and confirmation URLs on M-Pesa
  </p>
      ```
      Route:  /stk (app.js)

            type: Get

            Response-:
                  {

                        "ConversationID": "AG_20191219_000043fdf61864fe9ff5",
                        "OriginatorCoversationID": "16738-27456357-1",
                        "ResponseDescription": "Accept the service request successfully."

                  } 

     ---------------------------------------------------------------------------------
     ```
<br>

### 4.4.2 Componnent: Bal result 
   <p>
     <b>Url: /bal_result </b> 
     </br>
         On successfull lipa na M-Pesa transaction returns result 
     </p>
     <p>

   </p>
     ----------------------------------------------------------------------------------
<br>

### 4.4.3 Componnent: Bal timeout
   <p>
     <b>Url: /bal_timeout </b> 
     </br>
         On Unsuccessfull lipa na M-Pesa transaction returns time out 
     </p>

      
            6.5 Route:  /bal_timeout (app.js)

                  type: Post

                  Response-:
                        {
 
                              "requestId": "11728-2929992-1",
                              "errorCode": "401.002.01",
                              "errorMessage": "Error Occurred "

                        }
     
     ------------------------------------------------------------------------------------
<br>

### 4.4.4 Componnent: Stk callback
  <p>
     <b>Url: /stk_callback </b> 
     </br>
         On successfull lipa na M-Pesa transaction returns result 



 </p>

        
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

     
     -----------------------------------------------------------------------------------------
<br>

### 4.4.5 Componnent: Dynamic M-Pesa QR
  <p>
     <b>Url: /stk/Qr-code </b> 
     </br>
         Use this API to generate a Dynamic QR which enables Safaricom M-PESA customers who have smartphones and use LIPA NA M-PESA as their preferred mode of payment, to scan a QR (Quick Response) code.
  </p>


            6.5 Route:  /stk/Qr-code (app.js)

            type: Post

            Response-:
                  {
                        "ResponseCode": "AG_20191219_000043fdf61864fe9ff5",
                        "RequestID": "16738-27456357-1",
                        "ResponseDescription": "QR Code Successfully Generated."
                        "QRCode": "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAHtElEQVR42u3d23rqIBAGUN//pbNv91c1cpwMsP7L1lgSZ uUAaF+XiDyal0MgAqEIhCICoQiEIgKhCIQiAqEIhCICoQiEu+zbf2l7wfvLyl/Z/Cc62/Btk8Ktag/Ot7/1LeWbQLgbwo+ dWtLlVfVxj7AZWEON9hf34wjPoQjhXIRDLsi11TmkspMgPMHhQQjfu7MZYRWnSQhrr6u1lZ0H4fYOIazg8QjCIW3odDX8a bxqryHcCuGf7oxB2AljIMJ5AzPDEQ7cEQjTISy/Rr1v1fyQ2Yywsw09Ffw4wnMcHjRF0YOwZ5NRCCc9Q0II4QMICyfxBiL 8eAq4//kMhPOmKCCEsLQLyxG2jTHW/qptcKJhjHT2FAWEEFYj/DnIEfOr/utq84QhhBA+g/DPxTAS4f1DaW0J9i9hq1pzA yGEUxAWTl1UzSMPnPGbNJcNIYTPI7wq5w/XQjhw8s08IYQTEV6/JtMmIfx2M9wwstI8ZrMKQitmjkbY8+GjUQhHteH+5NL wGNmzhjbmfhvCZRBeZRMA8xAOuV5N/YhQHoTX7oEwFOFVP8s36qF3yIBqPMLrgPhkfcsH4Xs2H/jYVnvL3TyO+gjC65j4j hEIFQBEIRgVAEQhGBUARCEYFQB EIRgVAEQhl0cD99bUnP15zMeM3PP73uP1qBkMBXMMIeVw1N1cUQLiNwFML715S/4YxXCoSpBRbWa+c94fuvSmjVnkc4hHA 9foXFWnsZvEHY9sO222k9DuEaApvL/f6dm8FACOEpIzGjEJa8ZzPC8ntgAiFcCWHzo9fPt+1HWDvWYlQGwsUQ9ox/9MAeh dA8IYQ73532XwaHI/zGzJUQQgi/XiSHPBOWt8QzIYSbI6wVGIzQ6CiEEFb8Mz0IIZRlEM54pUAI4e/b11FDOBBCuA/CtlK etHa0fMjUGCmEEPoUBYSSFeE14vOEPa8UCCGse+dyVATOzj9sNbb7uEGwmwAAAABJRU5ErkJggg==."
     -------------------------------------------------------------------------------
<br>

# 5.Middle ware
   
### 4.4.2  Access token
   <p> 

      6.1  Middleware (app.js)

            type: Get 

            Response-:
                  {

                        "access_token": "gGWQ7ytQQ5yR0nrGAL1TtJXzCoSY"

                  }
            
   </p>
     -----------------------------------------------------------------------------
    

<h5>




