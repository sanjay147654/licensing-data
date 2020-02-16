const express = require('express');
const app = express();

const licenseFile = require('nodejs-license-file');

const template = [
    '====BEGIN LICENSE====',
    '{{&licenseVersion}}',
    '{{&applicationVersion}}',
    '{{&firstName}}',
    '{{&lastName}}',
    '{{&email}}',
    '{{&expirationDate}}',
    '{{&serial}}',
    '=====END LICENSE====='
].join('\n');

app.get('/', (req,res) => {

   console.log('Got a request at /')

   res.setHeader('type','text/html')

   res.send('<h1>Hello from sanjay</h1>')

})

app.get('/verifyLicense',(req,res) => {
 
   try {

      const licence = `
====BEGIN LICENSE====
1
1.0.0
Sanjay
Kumar
sanjay14765423@gmail.com
12/10/2025
EB9dsjLOzz6Jr3YZDBdgqytMZY9y7RKs8XbQ2WvS5MrNbbiEhwZkn8rVIdFBjukpn71c4MKt2a5dVny0KWfe/HSvaAtcLpxKcNbE7s8F0ZazRa/WGHqcPF74dQTZq/CQboXYku/4r/CmVQJfC4jWOjZSRJJYzUPZa6TIW1m8wQ88fc+xNxJ2RjHGWHDztBGe+x/460WWTPNF5U3xlGoA2YZhg1/jmIKPzJhQ0TM70uMMCW+D9jHx+bAv0NlnWeUSa/n3V+INJTh4sS3azrcOdn0cwsnpQR5mFNr+mDUzgooGGXSGgc8N02HaVyxelECVtJhcHNH1UHP9vlz5QBN+fw==
=====END LICENSE=====
    `;

    
       const licensedata = licenseFile.parse({
           publicKeyPath: 'C://licensing-test/licensing-test-public-key.pem',
           licenseFile: licence,
           template
       });

       console.log('Got a request at /verifyLicense')

       res.setHeader('type','text/html')

       res.send(licensedata)
    
    } catch (err) {
       
       console.log(err);

    }


})

app.listen('3000');