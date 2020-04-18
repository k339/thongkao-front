import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {StateService} from '../../services/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  name = '';
  isShowDropDownLogout = false;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.name = this.localStorageService.getUsername();
  }

  logout() {
    localStorage.clear();
    window.location.href = '/admin';
  }
}
