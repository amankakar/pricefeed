

const rp = require("request-promise");


const requestOptions = {
    method: "GET",
    uri:
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJAI&apikey=4Z5GR4N13XXO38FV",
    json: true,
    gzip: true,
  };
  
  const request3= {
    method: 'POST',
    uri: 'https://finnhub.io/api/v1/webhook/add?token=bu4ia8n48v6p8t6gib00',
    body: {
      event: 'earnings', symbol: 'AAPL'   
     },
    json: true // Automatically parses the JSON string in the response

  }
  async function resolve_promises() {

    let financialmodelingprep = () => {
      return new Promise(async function (resolve, reject) {
        Promise.resolve(rp(requestOptions)).then(async (response) => {
          return resolve(JSON.stringify(response));
        });
      });
    };
      let funhub = ()=>{
        return new Promise(async function (resolve, reject) {
          Promise.resolve(rp(request3)).then(async (response) => {
            return resolve(JSON.stringify(response));
          });
        });
  
      

    };
    

//     r = requests.post('', json={})
// res = r.json()
// print(res)



    let financial = JSON.parse(await financialmodelingprep());
    let json = await funhub();
    console.log(
        "financialmodelingprep::",
        financial[0],
        "\ncrypto_compair::",
        json
      );
  
}


resolve_promises();