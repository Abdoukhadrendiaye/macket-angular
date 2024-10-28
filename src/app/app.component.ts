import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, SidebarComponent, SidenavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'macket-angular';

    categorie=[
        {
            id:1,
            model:"model",
            marque:"toyota",
            date:"12/02/22",
            types:"depanage",
            voiture:498
        },
        {
           id:2,
            model:"model",
            marque:"toyota",
            date:"12/02/22",
            types:"depanage",
            voiture:503 
        },
        {
            id:3,
            model:"model",
            marque:"toyota",
            date:"12/02/22",
            types:"depanage",
            voiture:507
        }
    ]
}

