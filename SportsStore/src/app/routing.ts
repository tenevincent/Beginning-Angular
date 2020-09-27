import { RouterModule, Routes } from "@angular/router";
import { StoreFirstGuard } from './store-first-guard';
import { CartDetailsComponent } from './store/cart-details/cart-details.component';
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { StoreComponent } from "./store/store.component";


export const routes: Routes =   [
    { path: "store", component: StoreComponent, canActivate:[StoreFirstGuard] },
    { path: "cart", component: CartDetailsComponent, canActivate:[StoreFirstGuard]  },
    { path: "checkout", component: CheckoutComponent, canActivate:[StoreFirstGuard]  },
    { path: "**", redirectTo: "/store" }
    ];
    