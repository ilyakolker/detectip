const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
const request = require('request');

app.use(express.static(__dirname + '/public'));

app.get("/ip",(req,res)=>{
  
 
   request(`http://proxycheck.io/v2/${req.query.ip}?key=446704-298402-570002-06g06y?vpn=1&asn=1&tag=proxycheck.io`, function(error, result, body) {
      res.send(JSON.parse(body));
    })
  });


  app.get("/myip",(req,res)=>{

  const publicIp = require('public-ip');
 
(async () => {
    res.send(await publicIp.v4());
})();

    // require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    //   console.log('addr: '+add);
    // })
    // request(`https://api.ipify.org?format=json`, function(error, result, body) {
    //    res.send(JSON.parse(body));
    //  });
   });
    
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

