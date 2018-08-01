import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { ChartsModule } from 'ng2-charts';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from "./translation.service";
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
