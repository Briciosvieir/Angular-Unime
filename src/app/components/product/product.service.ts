import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl ="http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg,'x',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"

    })
  }
     //Observablo recebe Product que foi enviado no post, por isso a repetição
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }
    //Metodo que pega as informações, ler os dados do backend
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
