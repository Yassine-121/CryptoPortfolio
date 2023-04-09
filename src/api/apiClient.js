import axios from "axios";

const binanceBaseUrl = "https://api.binance.com/api/v3/";
const bitfinexBaseURL = "https://api-pub.bitfinex.com/v2/";

const binanceClient = axios.create({
    baseURL: binanceBaseUrl,
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
