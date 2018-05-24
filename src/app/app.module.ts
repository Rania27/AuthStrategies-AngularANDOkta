import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from './shared';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';
import {  AuthGuard,OktaAuthWrapper } from './shared';


const appRoutes: Routes = [
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OAuthModule.forRoot(),
    

  ],
  providers: [SearchService,
                AuthGuard,
                OktaAuthWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
