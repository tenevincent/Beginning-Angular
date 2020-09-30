import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../model/order';
import { OrderRepository } from '../../model/order-repository';

@Component({
  selector: 'app-order-table',
  template: `
  <div class="form-check">
  <label class="form-check-label">
  <input type="checkbox" class="form-check-input" [(ngModel)]="includeShipped"/>        
      Display Shipped Orders
  </label>
</div>
<table class="table table-sm">
  <thead>
      <tr><th>Name</th><th>Zip</th><th colspan="2">Cart</th><th></th></tr>
  </thead>
  <tbody>
      <tr *ngIf="getOrders().length == 0">
          <td colspan="5">There are no orders</td>
      </tr>
      <ng-template ngFor let-o [ngForOf]="getOrders()">
          <tr>
              <td>{{o.name}}</td><td>{{o.zip}}</td>
              <th>Product</th><th>Quantity</th>
              <td>
                  <button class="btn btn-warning m-1" (click)="markShipped(o)">
                      Ship
                  </button>
                  <button class="btn btn-danger" (click)="delete(o.id)">
                      Delete
                  </button>
              </td>
          </tr>
          <tr *ngFor="let line of o.cart.lines">
              <td colspan="2"></td>
              <td>{{line.product.name}}</td>
              <td>{{line.quantity}}</td>
          </tr>
      </ng-template>
  </tbody>
</table>
  `,
  styles: [
  ]
})
export class OrderTableComponent implements OnInit {

  includeShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): OrderService[] {
      return this.repository.getOrders()
          .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: OrderService) {
      order.shipped = true;
      this.repository.updateOrder(order);
  }

  delete(id: number) {
      this.repository.deleteOrder(id);
  }

  ngOnInit(): void {
  }

}
