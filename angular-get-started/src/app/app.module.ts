import { DataServiceService } from './data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncPipeObservableComponent } from './async-pipe-observable/async-pipe-observable.component';
import { CarsBrandComponent } from './cars-brand/cars-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ParentComponent,
    ChildComponent,
    PipeExampleComponent,
    AsyncPipeComponent,
    AsyncPipeObservableComponent,
    CarsBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
