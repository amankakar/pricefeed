var CoinMarketCap = require("coinmarketcap-api");
const apiKey = "1b5c72ad-5c44-4c8d-80fb-e76d19653230";
const client = new CoinMarketCap(apiKey);
const rp = require("request-promise");
const util = require("util");

// CoinMarketCap price feed , for now i am using free tier.
let coin_market1 = client.getQuotes({ symbol: ["ETH"], convert: "USD" });

// coingecko this is one is free
const requestOptions = {
  method: "GET",
  uri:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum",
  json: true,
  gzip: true,
};

// crypto compair for now i am using free tier.
const requestOptions_cryptocompair = {
  method: "GET",
  uri: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
  headers: {
    authorization:
      "Apikey c021eadc59a6de08e1e8571472432a9a67dab240dc9b3b2b5c528ede8e855a91",
  },
  json: true,
  gzip: true,
};

async function resolve_promises() {
  let coingecko = () => {
    return new Promise(async function (resolve, reject) {
      Promise.resolve(rp(requestOptions)).then(async (response) => {
        let json_string = JSON.stringify(response);
        let json_obj = await JSON.parse(json_string);
        return resolve(json_obj[0].current_price);
      });
    });
  };
  let coin_market = () => {
    return new Promise(async function (resolve, reject) {
      Promise.resolve(coin_market1).then(async (coin) => {
        let json_string = JSON.stringify(coin);
        let json_parse = await JSON.parse(json_string);
        return resolve(json_parse.data.ETH.quote.USD.price);
      });
    });
  };
  let crypto_compair = () => {
    return new Promise(async function (resolve, reject) {
      Promise.resolve(rp(requestOptions_cryptocompair)).then(
        async (crypto_compair) => {
          let json_string = JSON.stringify(crypto_compair);
          let json_parse = await JSON.parse(json_string);
          return resolve(json_parse.USD);
        }
      );
    });
  };
  let total =
    parseFloat(await coingecko()) +
    parseFloat(await coin_market()) +
    parseFloat (await crypto_compair());
  let parser_for_Blockchain = parseFloat(total / 3).toFixed(2) * 100;
  console.log("value to be passed to contract::" , parser_for_Blockchain)
    console.log(
      "coingecko::",
      await coingecko(),
      "\ncoin_market::",
      await coin_market(),
      "\ncrypto_compair::",
      await crypto_compair()
    )
}
resolve_promises();
