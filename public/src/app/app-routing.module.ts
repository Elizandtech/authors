import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: AllAuthorsComponent},
  { path: 'new', component: CreateAuthorComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: UpdateAuthorComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
