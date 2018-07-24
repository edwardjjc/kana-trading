import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  
  contactos: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.contactos = db.collection('Contactos').valueChanges();
  }

  enviarComentario(){
    alert('Mensaje Enviado');
  }

}
