import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from './order';
import { StaticDataSourceService } from './static-data-source';






@Injectable()
export class OrderRepository {
    private orders: OrderService[] = [];
    constructor(private dataSource: StaticDataSourceService) { }
    getOrders(): OrderService[] {
        return this.orders;
    }
    saveOrder(order: OrderService): Observable<OrderService> {
        return this.dataSource.saveOrder(order);
    }
}
