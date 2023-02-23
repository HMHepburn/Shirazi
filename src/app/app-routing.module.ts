import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TempComponentComponent } from './temp-component/temp-component.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      // { 
      //   path: 'component1', 
      //   component: TempComponentComponent 
      // }
    ]
  }

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
