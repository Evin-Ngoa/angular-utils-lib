import { NgModule } from '@angular/core';
import { AngularUtilsLibComponent } from './angular-utils-lib.component';
import { NoSpecialCharactersDirective } from './no-special-characters.directive';



@NgModule({
  declarations: [
    AngularUtilsLibComponent,
    NoSpecialCharactersDirective
  ],
  imports: [
  ],
  exports: [
    AngularUtilsLibComponent,
    NoSpecialCharactersDirective
  ]
})
export class AngularUtilsLibModule { }
