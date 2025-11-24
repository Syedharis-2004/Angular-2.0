import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  name=""
  displayName=""
  email=""
  getName(event:Event){
    this.name=(event.target as HTMLInputElement).value;
     }
     showName(){
      this.displayName=this.name;
     }
     setName(){
      this.name="Syed"
      }
    getEmail(val:string){
      console.log(val);
       this.email=val;
   
    } 
   }export class MyComponent {
  imagePath = 'assets/images/background.png';
}

