import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LeftLayoutComponent } from './left-layout/left-layout.component';
import { ContentComponent } from './content/content.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LeftLayoutComponent,
    ContentComponent,
    LayoutLoginComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
