import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CliComponent } from './cli/cli.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [AppComponent, CliComponent, WriteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
