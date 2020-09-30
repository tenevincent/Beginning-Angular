import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from './order';
import { RestDataSourceService } from './rest.datasource';





@Injectable()
export class OrderRepository {
    private orders: OrderService[] = [];
    private loaded: boolean = false;



    constructor(private dataSource: RestDataSourceService) { }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }


    getOrders(): OrderService[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    saveOrder(order: OrderService): Observable<OrderService> {
        return this.dataSource.saveOrder(order);
    }
    updateOrder(order: OrderService) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.
                findIndex(o => o.id == order.id), 1, order);
        });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
        });
    }


}
