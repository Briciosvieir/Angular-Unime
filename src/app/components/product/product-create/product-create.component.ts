import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  products: Product = {
    id:1,
    name: 'Digite',
    price:0,
  }

  ngOnInit(): void {
    
  }

  creatProduct(): void {
    this.productService.create(this.products).subscribe(()=>{
      this.productService.showMessage("Operação executada com sucesso!")
       this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
    
  }


}
