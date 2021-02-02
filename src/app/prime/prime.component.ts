import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {

  constructor() { }

  prime;
  count=0;
  primeArray = [];

  checkPrime(item){
    this.primeArray = []
   let array = item.split(',')
   console.log(array)
    for(let i=0;i<array.length;i++){
   for (let j = 1; j <= array[i]; j++) {
       if(array[i]%j==0){
        this.count++
        }
}
if(this.count<=2){
this.primeArray.push(array[i]+' is prime number');
}else{
  this.primeArray.push(array[i] +' is not prime number') ;
}
this.count = 0;
    }
  }

  ngOnInit(): void {
  }

}
