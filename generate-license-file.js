//generate license file

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
 
try {
 
    const licenseFileContent = licenseFile.generate({
        privateKeyPath: 'C://licensing-test/licensing-test-private-key.pem',
        template,
        data: {
            licenseVersion: '1',
            applicationVersion: '1.0.0',
            firstName: 'Sanjay',
            lastName: 'Kumar',
            email: 'sanjay14765423@gmail.com',
            expirationDate: '12/10/2025'
        }
    });
    
    console.log(licenseFileContent);
 
} catch (err) {
    
    console.log(err);
}