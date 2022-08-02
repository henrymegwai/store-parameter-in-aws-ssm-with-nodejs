const { saveSecret, getSecret} = require('./secret');

saveSecret('myusername', 'mypassword01');

getSecret('/myusername/passwordString').then((password) => {
  console.log(password);
});
