const CoinMarketCap = require('coinmarketcap-api')
const apiKey = '1b5c72ad-5c44-4c8d-80fb-e76d19653230';
const client = new CoinMarketCap(apiKey)
const rp = require('request-promise');
//client.getQuotes({symbol : ['ETH'], convert: 'ETH'}).then(console.log).catch(console.error);
client.getGlobal().then(console.log).catch(console.error);
//client.getIdMap({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error);
const requestOptions = {
  method: 'GET',
  uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum',
//  qs: {
  //  'start': '1',
   // 'limit': '5000',
   // 'convert': 'USD'
 // },
  headers: {
    'X-CMC_PRO_API_KEY': '1b5c72ad-5c44-4c8d-80fb-e76d19653230'
  },
  json: true,
  gzip: true
};
   console.log(requestOptions);
rp(requestOptions).then(response => {
let json_string = JSON.stringify(response);
let json_obj = JSON.parse(json_string);


  console.log('API call response:',json_obj.current_price);
}).catch((err) => {
  console.log('API call error:', err.message);
});
