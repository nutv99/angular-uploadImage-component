import { Component, VERSION } from '@angular/core';
import { ImguploadComponent } from './imgupload/imgupload.component';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string;
  valueC!: any;
  valueD!: any;

  contactForm!: FormGroup;

  constructor(private fB: FormBuilder) {
    this.contactForm = this.fB.group({
      usernameForm: [''],
      picture1: [''],
      picture2: [''],
    });
  }

  //url; //Angular 8
  displayPicture1(count: any) {
    this.valueC = count;
    this.contactForm.get('picture1').setValue(count)
  }

  displayPicture2(count: any) {
    this.valueD = count;
    this.contactForm.get('picture2').setValue(count)
  }

  onSubmit() {}
}
