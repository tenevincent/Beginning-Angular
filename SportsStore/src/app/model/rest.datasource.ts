import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OrderService } from './order';
import { Product } from './product';
 




const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSourceService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: OrderService): Observable<OrderService> {
    return this.http.post<OrderService>(this.baseUrl + "orders", order);
  }
}
