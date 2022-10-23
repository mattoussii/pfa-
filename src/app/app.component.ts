import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    
    { title: 'connecter ', url: 'login', icon: 'log-in' },
    { title: 'formulaire', url: 'register', icon: 'create' },
    { title: 'nouvelle operation', url: 'pickup-call', icon: 'add' },
    { title: 'home', url: 'home', icon: 'wallet' },
    { title: 'historique', url: 'pickup-calls', icon: 'archive' },
    { title: 'propos', url: 'propos', icon: 'warning' },
  ];

  constructor() {}
}
