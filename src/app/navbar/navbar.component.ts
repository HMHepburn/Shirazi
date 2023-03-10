import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private themeService: ThemeService) {}

  ChangeTheme(): any {
    console.log("changing theme!");
    this.themeService.changeTheme();
  }
}
