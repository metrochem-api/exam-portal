import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import User from '../../types/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  formbuilder=inject(FormBuilder);
  userForm:FormGroup = this.formbuilder.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    age:['', ],
    address:[''],
    password:['', [Validators.required, Validators.minLength(8)]],
  })
userService=inject(UserService);
router=inject(Router);
route=inject(ActivatedRoute);
editUserId!:string;
ngOnInit(){
  this.editUserId =this.route.snapshot.params["id"];
// console.log('id', id)
if(this.editUserId){
  this.userService.getUser(this.editUserId).subscribe(result=>{
    this.userForm.patchValue(result);
  })
}
}
  addUser(){
    if(this.userForm.invalid){
      alert("please provide all field with valid data");
      return;
    }
    const model:User = this.userForm.value;
    console.log(this.userForm.value)
    this.userService.addUser(model).subscribe((result)=>{
      alert("User added successfully");
      this.router.navigateByUrl('/')
    })
  }

  updateUser(){
    if(this.userForm.invalid){
      alert("please provide all field with valid data");
      return;
    }
    const model:User = this.userForm.value;
    this.userService.updateUser(this.editUserId,model).subscribe((result)=>{
      alert('User update successfully.');
      this.router.navigateByUrl('/')
    })
  }
}
