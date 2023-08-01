import { Body, Controller, Post, Req, Res, Header } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  public async createOrder(
    @Body() body: any,
    @Req() req: any,
    @Res() res: any,
  ) {
    const result = await this.orderService.createOrder(
      body,
      res,
      req.headers.authorization,
    );
    res.status(200).json(result);
    // const fetchAPI = fetch('https://integration.api.scalapay.com/v2/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     Authorization: req.headers.authorization,
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     return json;
    //   });
    // res.status(200).json(fetchAPI);
  }
}
