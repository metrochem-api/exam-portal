import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import User from '../types/user';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
users:User[]=[];
UserService=inject(UserService);
ngOnInit(){
  this.UserService.getUsers().subscribe((result) => {
    this.users = result;
    console.log(this.users)
  })
}

delete(id:string){
const ok = confirm("Are you sure want to delete user?")
if(ok){
  this.UserService.deleteUser(id).subscribe((result)=>{
    alert('User deleted succesfully');
    this.users=this.users.filter((u)=>u._id != id);
  });
}
}

}
