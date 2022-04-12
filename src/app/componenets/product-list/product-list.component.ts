import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services_folder/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  tcurrentCategoryId?: number;


  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {

      this.listProducts();
    });
  }

  listProducts() {
    //check if "id" parameter is available:
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id'); //<a routerLink="/categories/1" routerLinkActive="active-link">

    if (hasCategoryId) {
      // get the 'id' param string, convert string to a number using the '+' symbol:
      this.tcurrentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // not category id available ... default to category id 1:
      this.tcurrentCategoryId = 1;
    }

    // now get the products for the given category id
    this.productService.getProductList(this.tcurrentCategoryId).subscribe(
      (data) => {
        this.products = data;
      });
  }
}
