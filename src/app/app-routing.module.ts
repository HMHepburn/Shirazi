import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { 
        path: 'typography', 
        component: TypographyComponent 
      },
      { 
        path: 'accordion', 
        component: AccordionComponent 
      },
      { 
        path: 'button', 
        component: ButtonComponent 
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
