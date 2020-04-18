import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../modals/user';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  isShowModalCreate = false;
  formCreateUser: FormGroup;
  user: User;
  rules: string[];
  userList: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getUserList();
  }

  getUserList() {
    this.adminService.getUsers().subscribe(res => {
      this.userList = res;
    });
  }

  initForm() {
    this.formCreateUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showModalCreate() {
    this.isShowModalCreate = true;
  }

  onCheckChange(value: string, event: any) {
    if (event.checked) {
      this.rules.push(value);
    } else {
      this.rules.splice(this.rules.findIndex(r => r === value), 1);
    }
  }

  onSubmit() {
    this.user = this.formCreateUser.getRawValue();
    this.user.rules = this.rules;
    this.adminService.createUser(this.user).subscribe(res => {
      alert('Success.');
      this.isShowModalCreate = false;
      this.formCreateUser.reset();
      this.getUserList();
    }, error => {
      alert('error');
    })
  }
}
