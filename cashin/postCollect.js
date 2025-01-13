const myHeaders = new Headers();
myHeaders.append("Authorization", "s3pAuth s3pAuth_timestamp=\"1736759826778\", s3pAuth_signature=\"Dpt2ny4Pi823tshZZhwW0XpDjNc=\", s3pAuth_nonce=\"1736759826778\", s3pAuth_signature_method=\"HMAC-SHA1\", s3pAuth_token=\"867BA1FC-256C-8A65-1BB6-0BF4137260E4\"");
myHeaders.append("Content-Type", "application/json");

//QuoteId should be imported from postQuote.js
//I am still to figure out the rest of the remaining data set
const raw = JSON.stringify({
  "quoteId": "167a640e-e8b3-47f3-87ee-662802da123e",
  "customerPhonenumber": "673816627",
  "customerEmailaddress": "devert@test.com",
  "customerName": "Devert",
  "customerAddress": "MambandaBonaberi",
  "serviceNumber": "677389120",
  "trid": "1000009"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://s3p.smobilpay.staging.maviance.info/v2/collectstd", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));