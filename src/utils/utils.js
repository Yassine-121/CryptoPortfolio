import crypto from "crypto";
import dotenv from 'dotenv';
dotenv.config();

export function generateSignature(queryString) {
    return crypto.createHmac('sha256', process.env.API_SECRET).update(queryString).digest('hex');
}
export const timestamp = Date.now();
