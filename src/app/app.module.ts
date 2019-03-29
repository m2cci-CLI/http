import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github-api.service';
import { MyIntercetor } from './interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubApiService,MyIntercetor],
  bootstrap: [AppComponent]
})
export class AppModule { }
