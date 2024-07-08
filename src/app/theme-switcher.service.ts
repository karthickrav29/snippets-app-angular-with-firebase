import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  private darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.documentElement.setAttribute('data-theme', this.darkTheme ? 'dark' : 'light');
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }
}
