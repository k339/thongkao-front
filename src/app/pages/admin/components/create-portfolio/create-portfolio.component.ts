import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Portfolio} from '../../../../modals/portfolio';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss']
})
export class CreatePortfolioComponent implements OnInit {

  @Input()
  isShowModalCreate = false;
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  formCreatePortfolio: FormGroup;
  images: File[] = [];
  portfolio: Portfolio;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formCreatePortfolio = this.formBuilder.group({
      title: ['', Validators.required],
      customer: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  hiddenModalCreate() {
    this.isShowModalCreate = false;
    this.images = [];
    this.save.emit(false);
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
      this.save.emit(false);
    }, error => {
      alert('Error');
    });
  }

}
