import { Component, OnInit } from '@angular/core';
import data from '../../assets/mocks/login.json';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // credentials: {username: string, password: string};
  username:string;
  password:string;
  loginCred = data.data;
  constructor(private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  loginClicked() {
    if(!this.username || this.username.trim() == ''){
      this.showError('Please enter username');
      return;
    }

    if(!this.password || this.password.trim() == ''){
      this.showError('Please enter password');
      return;
    }

    if(this.username === this.loginCred['username']){
    
      if(this.password == this.loginCred['password']){
        this.showSuccess('Login Successfully');
        this.router.navigate(['/table']);
      }else{
        this.showError('Password incorrect');
      }

    }else{
      this.showError('User does not exist');
    }

  }

  showSuccess(msg:string) {
    this.toastr.success(msg);
  }

  showError(msg:string) {
    this.toastr.error(msg);
  }
}
