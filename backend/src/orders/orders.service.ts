import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { orders, initOrders } from './entities/orders';
import { products, initProducts } from '../products/entities/products';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    orders.splice(
      orders.findIndex((order) => order.id === id),
      1,
    );

    // remove products depends on order
    for (let i = products.length - 1; i >= 0; i--) {
      if (products[i].order === id) {
        products.splice(i, 1);
      }
    }

    // restore data after delete, for test purposes
    if (!orders.length) {
      setTimeout(() => {
        console.log('Data is empty. Restoring...');

        initOrders();
        initProducts();
      }, 1000);
    }

    return `This action removes a #${id} order`;
  }
}
