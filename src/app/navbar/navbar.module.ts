import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NavbarComponent,NgbModule]
})
export class NavbarModule { }
