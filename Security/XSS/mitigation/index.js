const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" /** load only from my domain - load something */ +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" //~? allow from self and unsecure.com
    //~? unsafe-inline allows inline script are allowed and can be loaded
  );
  //~? randomKey is the attribute nonce value to be added to script tag so that it will be allowed to execute
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://locolhost:${PORT}`);
});
