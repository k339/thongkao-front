import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PortfolioInfo } from '../../../../modals/portfolio-info';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent implements OnInit {

  portfolioInfoList: PortfolioInfo[] = [];
  isShowModalCreate = false;
  isShowModalUpdate = false;
  id: number = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getPortFolioList();
  }

  getPortFolioList() {
    this.adminService.getPortFolioList().subscribe(res => {
      this.portfolioInfoList = res;
    });
  }

  showModalCreate() {
    this.isShowModalCreate = true;
  }

  showModalUpdate(id: number) {
    this.id = id;
    this.isShowModalUpdate = true;
  }

  onSave(b: boolean) {
    this.getPortFolioList();
    this.isShowModalCreate = b;
    this.isShowModalUpdate = b;
  }
}
