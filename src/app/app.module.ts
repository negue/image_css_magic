import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ArraySortPipe} from './array-sort-pipe';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutoScaleComponent } from './auto-scale/auto-scale.component';
import { ValueOrDefaultPipe } from './auto-scale/value-or-default.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArraySortPipe,
    AutoScaleComponent,
    ValueOrDefaultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ArraySortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
