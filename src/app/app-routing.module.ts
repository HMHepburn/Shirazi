import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { 
        path: 'accordion', 
        component: AccordionComponent 
      }
    ]
  }

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
