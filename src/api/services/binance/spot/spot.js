import apiClient from "../../../apiClient.js";
import {generateSignature, timestamp} from "../../../../utils/utils.js";

export function getAllTrades(symbol) {
    const queryString = 'symbol=' + symbol + '&timestamp=' + timestamp;
    const signature = generateSignature(queryString);
    return apiClient.binanceClient.get('/myTrades?'+queryString+'&signature='+signature);
}
