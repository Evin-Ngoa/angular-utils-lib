import { NgModule } from '@angular/core';
import { NgstCommonUtilsComponent } from './ngst-common-utils.component';
import { NoSpecialCharactersDirective } from './directive/no-special-characters.directive';
import { CreditCardDirective } from './directive/credit-card.directive';
import { DifferenceDatePipe } from './pipe/date-difference.pipe';
import { CountdownDirective } from './directive/countdown.directive';
import { CurrencyFormatterDirective } from './directive/currency.directive';
@NgModule({
  declarations: [
    NgstCommonUtilsComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective,
    DifferenceDatePipe,
    CountdownDirective,
    CurrencyFormatterDirective,
  ],
  imports: [
  ],
  exports: [
    NgstCommonUtilsComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective,
    DifferenceDatePipe,
    CountdownDirective,
    CurrencyFormatterDirective
  ]
})
export class NgstCommonUtilsModule { }
