import { Component, VERSION } from '@angular/core';
import { ImguploadComponent } from './imgupload/imgupload.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  valueC! : any ;
  
  //url; //Angular 8
  displayCounter(count:any) {
    this.valueC = count ;
    alert(count);
  }

  displayCounter22(count:any) {
    alert( count);
  }
}
