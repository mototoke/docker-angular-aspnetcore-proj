import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './views/pages/top-page/top-page.component';

// services
import { TopPageService } from './services/pages/top-page.service';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TopPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
