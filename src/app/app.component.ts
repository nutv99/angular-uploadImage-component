import { Component, VERSION } from '@angular/core';
import { ImguploadComponent} from './imgupload/imgupload.component' ;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  //url; //Angular 8

}
