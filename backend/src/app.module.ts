import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [OrdersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
