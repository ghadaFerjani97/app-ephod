import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { PvUploadComponent } from './pv-upload/pv-upload.component';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SaisieFactureComponent } from './saisie-facture/saisie-facture.component'


@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
    PvUploadComponent,
    FileUploadComponent,
    SaisieFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    HttpClientModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
