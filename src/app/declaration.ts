export class Declaration {
 
    id: number;
    description: string;
    marque: string;
    montant: number;
    catégorie: string;
    provenance: string;
    etat: string;
    date:Date;
    terms: boolean;
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}