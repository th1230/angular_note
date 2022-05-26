import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//把 AppComponent 放到 exports 中是為了示範匯出的語法，這在本例子中實際上是沒必要的。 根模組沒有任何理由匯出任何東西，因為其它模組永遠不需要匯入根模組。

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
