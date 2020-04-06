import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Portfolio } from '../../../../modals/portfolio';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent implements OnInit {

  portfolioList: Portfolio[] = [];
  isShowModalCreate = false;
  massage = new FormControl('');
  images: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  showModalCreate() {
    this.isShowModalCreate = true;
  }

  hiddenModalCreate() {
    this.isShowModalCreate = false;
    this.images = [];
  }

  handleFileInput(files: FileList) {
    this.images.push(files[0]);
  }

  deleteImage(index: number) {
    this.images.splice(index,1);
  }

}
