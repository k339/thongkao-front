import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../services/admin.service';
import {UserLogin} from '../../../../modals/user-login';
import {LocalStorageService} from '../../../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    const userLogin = this.formLogin.value as UserLogin;
    this.adminService.userLogin(userLogin).subscribe(res => {
      this.localStorageService.setToken(res.token);
      this.localStorageService.setUsername(res.name);
      this.localStorageService.setRule(res.rules);
      this.router.navigate(['/admin']);
    }, error => {
      alert(error.message);
      this.formLogin = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    })
  }
}
