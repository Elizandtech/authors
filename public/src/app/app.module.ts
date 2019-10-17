import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthorService} from './author.service';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateAuthorComponent,
    UpdateAuthorComponent,
    AllAuthorsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
