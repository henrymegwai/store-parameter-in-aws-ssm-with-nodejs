const ssmClient = require('./aws-client');


//saving secrets
const saveSecret = (username, password) => {
   const secretName = `/${username}/passwordString`;
   console.log(`Saving secret to ${secretName}`);

    const parameterRequest = {
        Name: secretName,
        Type: 'SecureString',
        Overwrite: true,
        Value: password
    };
    ssmClient.putParameter(parameterRequest, (err, data) => {
       if(err){
        console.log(err, err.stack);
       }
    });
}
//retrieving secrets
const getSecret = async (secretName) => {
    console.log(`Getting secret for ${secretName}`);

    const params = {
        Name: secretName,
        WithDecryption: true 
    };
    const result = await ssmClient.getParameter(params).promise();
    return result.Parameter.Value;
};

module.exports = { saveSecret, getSecret };