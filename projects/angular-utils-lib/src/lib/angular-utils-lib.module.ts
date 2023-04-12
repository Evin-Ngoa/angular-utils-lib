import { NgModule } from '@angular/core';
import { AngularUtilsLibComponent } from './angular-utils-lib.component';
import { NoSpecialCharactersDirective } from './directive/no-special-characters.directive';
import { CreditCardDirective } from './directive/credit-card.directive';



@NgModule({
  declarations: [
    AngularUtilsLibComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective
  ],
  imports: [
  ],
  exports: [
    AngularUtilsLibComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective
  ]
})
export class AngularUtilsLibModule { }
