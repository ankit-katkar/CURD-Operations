import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name='';
  email='';
  number='';

  isEdit=false;
  editIndex='';
  userData:any=[];
  inputData:any=[];


  onSubmit(){
 let inputData ={
  name:this.name,
  email:this.email,
  number:this.number
 }
this.userData.push(inputData)
this.clear();
}

edit(i:any){
  this.editIndex = i;
  this.name=this.userData[i].name;
  this.email=this.userData[i].email;
  this.number= this.userData[i].number

  this.isEdit = true;
}
 
onUpdate(){
this.isEdit = false;

let inputData ={
  name:this.name,
  email:this.email,
  number:this.number
 }

 this.userData[this.editIndex]=inputData;
 this.clear();

}
delete(i:any){
  this.userData.splice(i,1)
}

  clear() { 
    this.name = '';
    this.email = '';
    this.number = '';
  }

}
