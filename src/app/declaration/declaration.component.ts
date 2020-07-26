import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Declaration } from '../declaration';
import { Router } from '@angular/router';


@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

    //Property for the etat
    private etat: string[];
    private provenance: string[];
    private declaration:Declaration;
    private marque:"";
    private montant:"";
    private catégorie:"";
    private date : Date;
    
   
    ngOnInit() {
   
      this.etat =  ['Neuf', 'Bon état', 'Mauvais état','Très bon état'];
      this.provenance=['Achat', 'Cadeau','Héritage','Location']
      //Create a new user object
      this.declaration = new Declaration({
          description:"", marque:"", montant:"" ,catégorie:"",  provenance: this.provenance[0],
          etat: this.etat[0], date: Date});
      }

      log(object) {
        console.log(object);
      }
    
       onFormSubmit({ value, valid}: { value: Declaration, valid: boolean }) {
          this.declaration = value;
          console.log( this.declaration);
          console.log("valid: " + valid);
        }

        changementDePage = function () {
          this.router.navigate(['./../pv-upload']);
       };
       

       

   
  }
 


