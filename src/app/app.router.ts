import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'home', component:HomeComponent },
  { path: 'about', component:AboutComponent }
 
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
