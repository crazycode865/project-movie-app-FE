import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/modules/movie/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  retUrl: string = '';
  loggedIn = false;
  // loginForm!: FormGroup;
  constructor(
    private _router: Router,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  user = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  openSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action);
  };
  onSubmit = (loginInfo: FormGroup) => {
    if (
      loginInfo.value.username != '' &&
      loginInfo.value.password != '' &&
      loginInfo.value.username != null &&
      loginInfo.value.password != null
    ) {
      this._loginService.generateToken(loginInfo.value).subscribe({
        next: (response: string) => {
          this._loginService.loginUser(response);
          localStorage.setItem('token', response);
          if (!response) this._router.navigate(['login']);
          else if (response && this.retUrl === '') {
            this._router.navigate(['home']);
          } else if (response && this.retUrl != '') {
            this._router.navigate([this.retUrl]);
          }
        },
      });
    }
  };
}
