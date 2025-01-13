const myHeaders = new Headers();
myHeaders.append("Authorization", "s3pAuth s3pAuth_timestamp=\"1736759061646\", s3pAuth_signature=\"fQUFhCxnOrDLlT5EDGcjUBZxfvg=\", s3pAuth_nonce=\"1736759061646\", s3pAuth_signature_method=\"HMAC-SHA1\", s3pAuth_token=\"867BA1FC-256C-8A65-1BB6-0BF4137260E4\"");
myHeaders.append("Content-Type", "application/json");

//Collect the payItemId & amount from getCashin.js
const raw = JSON.stringify({
  "payItemId": "S-112-948-MTNMOMO-20052-200040001-1",
  "amount": 100
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://s3p.smobilpay.staging.maviance.info/v2/quotestd", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));