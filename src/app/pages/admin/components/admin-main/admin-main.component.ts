import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../../services/local-storage.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  rules: string[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.rules = this.localStorageService.getRules()
  }

}
