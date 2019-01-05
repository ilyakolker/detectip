const express = require('express');
const port = process.env.PORT || 3000;

const request = require('request');
const getIP = require('external-ip')();

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('trust proxy', true);
app.get("/ip",(req,res)=>{
  
 
   request(`http://proxycheck.io/v2/${req.query.ip}?key=446704-298402-570002-06g06y?vpn=1&asn=1&tag=proxycheck.io`, function(error, result, body) {
      res.send(JSON.parse(body));
    })
  });


   app.get("/myip",(req,res)=>{
  
    
 
    getIP((err, ip) => {
        if (err) {
            // every service in the list has failed
            throw err;
        }
        res.send(ip);
    });

   


//     // request(`https://api.ipify.org?format=json`, function(error, result, body) {
//     //    res.send(JSON.parse(body));
//     //  });
    });
    
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

