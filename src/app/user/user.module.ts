import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { UserRoutingModule } from './user-routing';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
        SharedModule,
        UserRoutingModule
  ],
  exports: [
    CommonModule,
   
  ]
})
export class UserModule { }
