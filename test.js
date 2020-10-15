

const rp = require("request-promise");


const requestOptions = {
    method: "GET",
    uri:
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJAI&apikey=4Z5GR4N13XXO38FV",
    json: true,
    gzip: true,
  };
  
  const request2 = {
    method: "GET",
    uri:
"    https://financialmodelingprep.com/api/v3/historical-chart/1min/%5EDJI?apikey=892606eba02da218453d6ad7c775cc7c",    json: true,
    gzip: true,

  }
  async function resolve_promises() {

    let financialmodelingprep = () => {
      return new Promise(async function (resolve, reject) {
        Promise.resolve(rp(request2)).then(async (response) => {
          return resolve(JSON.stringify(response));
        });
      });
    };
    

let financial = JSON.parse(await financialmodelingprep());

console.log(
    "financialmodelingprep::",
    financial[0],
  //   "\ncrypto_compair::",
  //   await crypto_compair()
  );
  
  }


resolve_promises();