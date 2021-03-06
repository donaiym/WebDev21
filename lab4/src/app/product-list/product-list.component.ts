import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(url, description) {
    let l = "https://t.me/share/url?url=" + url + "&text=";
    window.open(l, "_blank");
  }

}
