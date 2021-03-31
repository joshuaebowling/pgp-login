import * as opengpg from "openpgp";

console.log("test");

const key = `AAAAB3NzaC1yc2EAAAADAQABAAABgQDqMdkDHPQwVF9Q5/+3mDWYplMwXJV00k6vwEskuVGvRXErTJ3Oi2oD4F8fRKuq0X7e85ef1kUD77UZtAXanWj+DMALITGOK9h4ROzx2qk8MAo3JuzfmaqzZFlfxAf/OZvw6fnHd5Juo8GHL7C8kIGBMZlTzMnoPSU7kMlPUz93KxQsnq7NHdnciGYMncLK2p+vVqb4ppsThtA3DFGrPLkVl5f6ikxPMWX9nuRDCBAOVlIEf1tQo8KNjWFzmUSJVwCm3pPZAts6Vz/a5SN0VYDVoEW63WiHt2P0Gr+AWBZbN1c5l1QRfsbvut+Jdj+rIPOcCQlYAxOXrKoNLvvd4n+GHDe+N5VaNbLEN/2t8fXIgsSftHO+3BLFYGzuM45xc9/DU9p/JzAgr3phOUZ6Tn4IUtor7HMzOY7/GHTtWoex3buDfJkPOm01LapsrsYv6j1XQ3O/armUj87W67WpgdYTlK9kGcxXjZXjtPEimGxAqCxQYp9L0YytUUNH5VP5hG8`;
opengpg
  .readKey({ armoredKey: key })
  .then((resp) => console.log)
  .catch((e) => console.log);

export default {};
