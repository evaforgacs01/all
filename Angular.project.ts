import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    @Input() productList: Product[] = this.productService.list;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
    }
    /* Filter
    transform(value: any[], phrase: string, key: string = ''): any[] {
  
      if (!Array.isArray(value) || !phrase || !key) {
        return value;
      }
  
      phrase = phrase.toLowerCase();
      return value.filter(item => {
        const stringItem = ('' + item[key]).toLowerCase();
        return stringItem.includes(phrase);
      })
    } */


}
