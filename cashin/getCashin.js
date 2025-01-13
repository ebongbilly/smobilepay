let serviceId = 20052;

const myHeaders = new Headers();
myHeaders.append("Authorization", "s3pAuth s3pAuth_timestamp=\"1736758413305\", s3pAuth_signature=\"I1nCaH+njUgVaJjRYZ1cCLt/tlw=\", s3pAuth_nonce=\"1736758413305\", s3pAuth_signature_method=\"HMAC-SHA1\", s3pAuth_token=\"867BA1FC-256C-8A65-1BB6-0BF4137260E4\"");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://s3p.smobilpay.staging.maviance.info/v2/cashin?serviceid=${serviceId}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));