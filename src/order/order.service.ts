/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

const header = (token: string) => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token,
    };
};
@Injectable()
export class OrderService {
    public async createOrder(body: any, response: any, token: string) {
       const apiURL = 'https://integration.api.scalapay.com/v2/orders'
       console.log('token', token);
       return await fetch(apiURL, {
              method: 'POST',
                headers: header(token),
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((json) => {
                return json;
            }
        );
  }
}
