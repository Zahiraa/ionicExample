import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {

  inputValue:string="";
  constructor() { }

  ngOnInit() {
  }

  convertEuro(){
      var a=Number(this.inputValue)*0.92;
      document.getElementById('euro').innerText=a.toString();
  }

  convertDollar(){
    var b=Number(this.inputValue)*0.1;
    document.getElementById('dollar').innerText=b.toString();
  }
}
