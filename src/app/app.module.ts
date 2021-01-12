import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';

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
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [ArraySortPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    for (const icon of ['search']) {
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(
        `./assets/material_icons/${icon}.svg`
      ));
    }
  }
}
