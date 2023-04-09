import {getAllTrades} from "../../api/services/binance/spot/spot.js";

const getPurchaseHistory = async (symbol) => {
    return await getAllTrades(symbol).then(r => r.data.filter((data) => {
        return data.isBuyer
    }))
}

export {
    getPurchaseHistory
}
