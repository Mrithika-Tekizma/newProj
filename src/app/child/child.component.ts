import { Component, Input, SimpleChanges, DoCheck, AfterContentInit, ContentChild, ElementRef, AfterContentChecked, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
 interval: any;
 count:number = 0;

 @Input() parentdata:any; 
 @Input() product: Product = new Product();
 @ContentChild('child') contentchild: any;
 @ViewChild('chidref') viewchild:any;

 constructor(){
  console.log("child constructor initilization");
  this.interval = setInterval(()=>{
    this.count++;
    console.log('Time running', this.count);
  },1000)
}

ngOnInit(): void {
console.log("child ngOnInit initilization");

}

ngOnChanges(changes: SimpleChanges): void {
   console.log('child NgOnChanges called',changes);
}

ngDoCheck(): void {
  console.log('ngDoCheck', this.product);
}

ngAfterContentInit(): void {
  console.log('Child ngAfterContentInit',this.contentchild);
  this.contentchild.nativeElement.setAttribute("style","color:red");
}

ngAfterContentChecked(): void {
  console.log('Child ngAfterContentChecked', this.contentchild );
}

ngAfterViewInit(): void {
  console.log('Child ngAfterViewInit', this.viewchild );
  this.viewchild.nativeElement.setAttribute("style","background-color:blue")
}

ngAfterViewChecked(): void {
  console.log('Child ngAfterViewCheck');
  
}

ngOnDestroy(): void {
  console.log('ngOnDestroy');
  clearInterval(this.interval);
}
}

