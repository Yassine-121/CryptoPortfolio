import apiClient from "../../../apiClient";
import {signature, timestamp} from "../../../../utils/utils";

function getAllTrades(symbol) {
    return apiClient.binanceClient.get('/myTrades?symbol='+symbol+
                                            '&timestamp='+timestamp+
                                            '&signature='+signature);
}

export default {
    getAllTrades
}
