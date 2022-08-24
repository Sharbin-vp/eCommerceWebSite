import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: any
  productDetails: any

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.productId = data['id']
    })
    this.productService.viewProduct(this.productId).subscribe((item: any) => {
      this.productDetails = item
    })
  }
  updateProduct(form: any) {
    let updateProduct = {
      id: form.value.id,
      productName: form.value.productName,
      categoryId: form.categoryId,
      description: form.value.description,
      price: form.value.price,
      is_avilable: form.value.is_avilable,
      productImg: form.value.productImg,
      rating: form.value.rating,
      review: form.value.review,
      vendor_name: form.value.vendor_name,
      warranty: form.value.warranty
    }
    this.productService.updateProduct(this.productId,updateProduct).subscribe((data:any)=>{
      alert('update sucess')
      this.router.navigateByUrl('products')
    })

  }

}
