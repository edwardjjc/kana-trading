import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CatalogComponent } from './catalog/catalog.component';

//Services
import { ConectionService } from './services/conection.service';

//Material Components
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo:'/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    AboutComponent,
    ContactsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [ 
    ConectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
