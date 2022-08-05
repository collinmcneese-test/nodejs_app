const { logHello } = require('@mydevsandbox-com/log-hello');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.cookie('userAccountID', 'abcd1234');
  res.send(logHello());
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
