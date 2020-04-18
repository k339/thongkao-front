import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioInfo } from '../../../../modals/portfolio-info';
import { Portfolio } from '../../../../modals/portfolio';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent implements OnInit {

  portfolioInfoList: PortfolioInfo[] = [];
  formCreatePortfolio: FormGroup;
  isShowModalCreate = false;
  images: File[] = [];
  portfolio: Portfolio;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getPortFolioList();
  }

  initForm() {
    this.formCreatePortfolio = this.formBuilder.group({
      title: ['', Validators.required],
      customer: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getPortFolioList() {
    this.adminService.getPortFolioList().subscribe(res => {
      this.portfolioInfoList = res;
    });
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

  onSubmit() {
    this.portfolio = this.formCreatePortfolio.getRawValue();
    this.portfolio.totalImage = this.images.length;
    this.adminService.createPortfolio(this.portfolio, this.images).subscribe(res => {
      alert('Success');
      this.isShowModalCreate = false;
      this.getPortFolioList();
    }, error => {
      alert('Error');
    });
  }
}
