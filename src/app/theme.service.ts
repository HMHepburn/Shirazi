import { Theme, lightTheme, darkTheme} from './Theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  //reuse active
  private activeTheme = lightTheme;
  private light: Theme = lightTheme;
  private dark: Theme = darkTheme;
  private lightDark: Boolean = true;

  changeTheme(): void {
    if(this.lightDark){
      this.activeTheme = this.dark;
      this.lightDark = false;
    }
    else {
      this.activeTheme = this.light;
      this.lightDark = true;
    }

    Object.keys(this.activeTheme.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.activeTheme.properties[property]
      );
    });
  }
}