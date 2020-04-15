import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  username = '';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.username = this.localStorageService.getUsername();
  }

}