import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OrderService } from './order';
import { Product } from './product';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';





const PROTOCOL = "http";
const PORT = 3500;


@Injectable()
export class RestDataSourceService {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: OrderService): Observable<OrderService> {
        return this.http.post<OrderService>(this.baseUrl + "orders", order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
     

      console.log(this.baseUrl + "login")

        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
          }).pipe(map(response => {
            console.log("response: " + response.success);
            console.log("response: " + response.token);

          this.auth_token = response.success ? response.token : null;
          console.log(" this.auth_token : " +  this.auth_token );
          
            return response.success;
        }));
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products",
            product, this.getOptions());
    }

    updateProduct(product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,
            product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`,
            this.getOptions());
    }

    getOrders(): Observable<OrderService[]> {
        return this.http.get<OrderService[]>(this.baseUrl + "orders", this.getOptions());
    }

    deleteOrder(id: number): Observable<OrderService> {
        return this.http.delete<OrderService>(`${this.baseUrl}orders/${id}`,
            this.getOptions());
    }

    updateOrder(order: OrderService): Observable<OrderService> {
        return this.http.put<OrderService>(`${this.baseUrl}orders/${order.id}`,
            order, this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }
}
