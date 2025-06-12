// app/api/zalo-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import moment from 'moment';

const config = {
  app_id: "2553",
  key1: "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
  endpoint: "https://sb-openapi.zalopay.vn/v2/create",
};

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json();
    const transID = Math.floor(Math.random() * 1000000);
    const order = {
        app_id: config.app_id,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
        app_user: orderData.email,
        app_time: Date.now(),
        item: JSON.stringify([{ ...orderData }]),
        embed_data: JSON.stringify({}),
        amount: orderData.amount,
        description: orderData.description,
        bank_code: "",
      };
      

    const data = `${order.app_id}|${order.app_trans_id}|${order.app_user}|${order.amount}|${order.app_time}|${order.embed_data}|${order.item}`;
    //@ts-ignore
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    const response = await axios.post(config.endpoint, null, { params: order });
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("ZaloPay error:", error);
    return NextResponse.json({ error: 'ZaloPay order creation failed' }, { status: 500 });
  }
}
