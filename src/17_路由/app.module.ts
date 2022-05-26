import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { OtherModule } from './other.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageComponent } from './home/message/message.component';
import { NewsComponent } from './home/news/news.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // OtherModule 改用動態引入
    AppRoutingModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    MessageComponent,
    NewsComponent,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
