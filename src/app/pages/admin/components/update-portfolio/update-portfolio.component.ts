import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../services/admin.service';
import {PortfolioInfo} from '../../../../modals/portfolio-info';
import {Portfolio} from '../../../../modals/portfolio';

@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.scss']
})
export class UpdatePortfolioComponent implements OnInit {

  @Input()
  isShowModalUpdate = false;
  @Input()
  id: number;
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  portfolio: Portfolio;
  formUpdatePortfolio : FormGroup;
  portfolioInfo: PortfolioInfo
  currentImages: Array<{id: number, name: string}> = [];
  updateImages: File[] = [];
  idImagesDelete: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio() {
    this.adminService.getPortfolio(this.id).subscribe(res => {
      this.portfolioInfo = res;
      this.initForm();
    });
  }

  initForm() {
    this.formUpdatePortfolio = this.formBuilder.group({
      id: [this.portfolioInfo.id],
      title: [this.portfolioInfo.title, Validators.required],
      customer: [this.portfolioInfo.customer, Validators.required],
      description: [this.portfolioInfo.description, Validators.required]
    });
    this.currentImages = this.portfolioInfo.files;
  }

  hiddenModalUpdate() {
    this.isShowModalUpdate = false;
    this.save.emit(false);
  }

  deleteCurrentImage(index: number) {
    this.idImagesDelete.push(this.currentImages[index].id);
    this.currentImages.splice(index,1);
  }

  handleFileInput(files: FileList) {
    this.updateImages.push(files[0]);
  }

  deleteUpdateImages(index: number) {
    this.updateImages.splice(index, 1);
  }

  onUpdate() {
    this.portfolio = this.formUpdatePortfolio.getRawValue();
    this.portfolio.totalImage = this.updateImages.length;
    this.portfolio.idImagesDelete = this.idImagesDelete;
    this.adminService.updatePortfolio(this.portfolio, this.updateImages).subscribe(res => {
      alert('Success');
      this.isShowModalUpdate = false;
      this.save.emit(false);
    }, error => {
      alert('Error');
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.adminService.deletePortfolio(id).subscribe(res => {
        alert('Success');
        this.isShowModalUpdate = false;
        this.save.emit(false);
      }, error => {
        alert('Error');
      });
    }
  }

}
