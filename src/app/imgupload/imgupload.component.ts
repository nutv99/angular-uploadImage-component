import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imgupload',
  templateUrl: './imgupload.component.html',
  styleUrls: ['./imgupload.component.css']
})
export class ImguploadComponent implements OnInit {
  @Input() myurlcode = '';
  @Output() 	IAmselectFile = new EventEmitter();
	// @Output() valueChange = new EventEmitter();

  url: any; 
	msg = "";

  constructor() { }

  ngOnInit() {
  }

  	
	
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
			console.log(reader.result)
		}
	}

}