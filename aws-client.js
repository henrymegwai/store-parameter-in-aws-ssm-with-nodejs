const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-1'});
const ssmClient = new AWS.SSM();


module.exports = ssmClient;