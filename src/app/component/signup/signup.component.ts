import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../../interface/user";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  model: User = { username: "admin", password: "admin"};
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/products'
    //this.authService.logout();
  }

  //for easy access to form fields
  get f() { return this.loginForm.controls }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.f.userid.value == this.model.username && this.f.password.value == this.model.password) {
        console.log('User succesful');
        let user: User = new class implements User {
          password: string;
          username: string;
        };
        user.username = this.f.userid.value;
        user.password = this.f.password.value;
        this.authService.login(user);

        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Please check your username and password';
      }
    }
  }

}
