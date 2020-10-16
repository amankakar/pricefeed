const finnhub = require('finnhub');
var fs = require('fs');
const  iex = require( 'iexcloud_api_wrapper' )

const quote = async (sym) => {
    const quoteData = await iex.quote(sym);
    // do something with returned quote data
    console.log(quoteData)
};
quote("DJGI");


var crypto = require('crypto-js');
var IEX = 'Tsk_f609c4b2874e46a8b4638b28bd665844';
var public_key = '294d945c734f82bf5cadc9c7ad44a2172a4b9e23';
var ticker_btcusd_url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';

var request = require('request');
var options = {
    url: "https://finnhub.io/api/v1/quote?symbol=DJI&token=bu4ia8n48v6p8t6gib00",
    
};

var option2 = {
    url : "https://cloud.iexapis.com/stable/tops?token=sk_da1ffc4604eb4fe9b90fb147bb37d9ef&symbols=djai"    ,
    header :{
        'Accept': 'text/event-stream'
    }
}
function callback(error, response, body) {
    console.log(response)
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body));
    }
}

// request(option2, callback)

