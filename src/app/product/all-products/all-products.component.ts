import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
export interface type {
  id: number;
  productName: string;
  categoryId: number;
  description: string;
  price: number;
  is_avilable: boolean;
  productImg: string;
  rating: number;
  review: number;
  vendor_name: string;
  warranty: number;

}
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productList: type[] = [];
  filtercatogy: type[] = [];
  searchkey: any = ""

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct()
      .subscribe((data: any) => {
        this.productList = data;
        console.log(this.productList);

      })
    this.productService.search.subscribe((value: any) => {
      this.searchkey = value

    })
  }
  //filter
  filter(catogory: any) {
    this.filtercatogy = this.productList
      .filter((item: any) => {
        if (item.categoryId == catogory || catogory == '') {
          return item
        }
      })

  }

}
