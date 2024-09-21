import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';
import { P404Component } from './app/p404/p404.component';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter([
      {path:'',component:HomepageComponent,pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'login',component:LoginComponent},
      {path:'about',component:P404Component}
    ]),
    provideHttpClient()
  ],
})
  .catch((err) => console.error(err));
