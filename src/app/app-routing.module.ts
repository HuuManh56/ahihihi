import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LeftLayoutComponent } from './left-layout/left-layout.component';
import { ContentComponent } from './content/content.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: "home",
    component: LayoutMainComponent,
    children:[
      { path: '', component: ContentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
