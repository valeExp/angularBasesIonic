import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [ AboutComponent,HomeComponent,ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [ AboutComponent,HomeComponent,ContactComponent ]
})
export class PageModule { }
