import { Component , OnInit, OnChanges} from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newProject';
  data:any;
  name:any;
  price:any;
  product:Product = new Product();
  constructor(){
       console.log("constructor initilization");
  }

 ngOnInit(): void {
  console.log(" ngOnInit initilization");
 }

 update(e:any){
 this.data = e.target.value;
 }

 updateproduct(){
  this.product = new Product();
  this.product.name = this.name;
  this.product.price = this.price;
 }
}
