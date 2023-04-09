import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const binanceBaseUrl = "https://api.binance.com/api/v3/";
const bitfinexBaseURL = "https://api-pub.bitfinex.com/v2/";

const binanceClient = axios.create({
    baseURL: binanceBaseUrl,
    headers: {
        'X-MBX-APIKEY': process.env.API_KEY,
        'Content-Type': 'application/json'
    },
    qs: {
        recWindow: 60000
    },
    timeout: 5000,
});

const bitfinexClient = axios.create({
    baseURL: bitfinexBaseURL,
    timeout: 5000,
})

export default {
    binanceClient,
    bitfinexClient
}
