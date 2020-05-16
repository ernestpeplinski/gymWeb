import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { CommonComponent } from './components/common/common.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NavbarModule,
    FormsModule,
    NgbModule
  ],exports: [
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
