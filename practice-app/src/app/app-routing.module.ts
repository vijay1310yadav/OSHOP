import { AddNotesComponent } from './add-notes/add-notes.component';
import { ContactComponent } from './contact/contact.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { NewAppComponent } from './new-app/new-app.component';



const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'home',component: HomeComponent},
  {path:'new-app',component: NewAppComponent},
  {path:'notes',component: AddNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
