import crypto from "crypto";

export const signature = crypto.createHmac('sha256', process.env.API_SECRET);
export const timestamp = Date.now();
