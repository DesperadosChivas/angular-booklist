import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BooksService } from './services/books.service';
import { BookListComponent } from './book-list/book-list.component';

const appRoutes: Routes = [
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
    { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
    { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [
     BrowserModule, 
     FormsModule, 
     ReactiveFormsModule,
     HttpClientModule, 
     RouterModule.forRoot(appRoutes)     
     ],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    SignupComponent, 
    SigninComponent, 
    SingleBookComponent, 
    BookFormComponent, 
    HeaderComponent, 
    BookListComponent
    ],
  bootstrap: [ AppComponent ],
  providers: [AuthService, AuthGuardService, BooksService]
})

export class AppModule { }
