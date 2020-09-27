import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Name, WeatherLocation } from "./app/name-and-weather";
import { Name as OtherName } from "./app/duplicate-name";
import { TemperatureConverter } from "./app/temperature-converter";



if (environment.production) {
  enableProdMode();
}

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("Total value: $" + totalValue.toFixed(2));    



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TemperatureConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TemperatureConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TemperatureConverter.convertFtoC("23")];

for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}


