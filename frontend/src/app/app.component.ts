import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-Hub';
  product_name: any
  product_image: any
  product_description: any
  product_price: any
  img: any
  imageurl: any
  products:any[] = []
  isCollapsed: boolean;
  constructor(private route: Router, private http: HttpClient, private domSanitizer: DomSanitizer) { this.isCollapsed=true}

  onFileChanged(event: any) {
    this.img = event.target.files[0];
    console.log("image:", this.img);
  }

  submitData() {
    let formData: FormData = new FormData();
    formData.append('product_image', this.img, this.img.name);
    formData.append('product_name', this.product_name);
    formData.append('product_description', this.product_description);
    formData.append('product_price', this.product_price);
    this.http.post('http://localhost:4000/product/createProduct', formData).subscribe(
      (res) => console.log('res:', res)
    )
  }


  // getImage() {
  //   this.http.get('http://localhost:4000/product/getProductById/796b0ef9-e4df-44e0-918e-8cb99da61ffe').subscribe(
  //     (res: any) => {
  //       console.log('res:', res)
  //       this.imageurl = res.fileName
  //     }
  //   )
  // }

  getAllProduct() {
    this.http.get('http://localhost:4000/product/getAllProducts').subscribe(
      (res: any) => {
        console.log('res:', res)
        // this.imageurl = res.fileName
        for (let i = 0; i < res.count; i++) {
          var encodedString = String.fromCharCode.apply(null, res.products[i].product_image.data);
          var decodedString = decodeURIComponent(escape(encodedString));
          res.products[i].product_image = decodedString
        }
        this.products = res.products
        console.log('file name:', res);
      }
    )
  }
}
