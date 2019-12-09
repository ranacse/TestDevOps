import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient) { }

  employees: any;
  products : any;
  ngOnInit(): void {

    
    var sdf= this.asd();
    var asd= this.products;
    
    
  }
  
  
  title = 'dockerAngu';
  asd(){
    var fetchData = 
      this.http.get("https://api.github.com/users/mralexgray/repos").subscribe(
        (res: Response) => {
          this.products = res;
          debugger
          
        }
      )
    
    console.log("Hello" + this.products + " no asd");

  }
  
  
  

}
