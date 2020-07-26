import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient, HttpEventType } from '@angular/common/http';

 
 

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile:File= null ; 
  constructor( private http:HttpClient){}
   
  onFileSelected(event) {
    this.selectedFile =<File> event.target.files[0];
 
  }

 /** onUpload(){
    const fd= new FormData;
    fd.append('pv',this.selectedFile,this.selectedFile.name)
    this.http.post('URL_backend')
      .susbscribe(res => { console.log(res)});
  }*/


  
  ngOnInit(): void {
  }

}
