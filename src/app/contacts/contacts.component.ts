import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  contactos: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.contactos = db.collection('Contactos').valueChanges();
  }
  ngOnInit() {
  }

}
