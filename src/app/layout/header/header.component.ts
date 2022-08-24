import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchterm:any

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchterm=event.target.value
    this.ProductService.search.next(this.searchterm)
  }

}
