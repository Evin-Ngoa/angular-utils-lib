import { NgModule } from '@angular/core';
import { NgstCommonUtilsComponent } from './ngst-common-utils.component';
import { NoSpecialCharactersDirective } from './directive/no-special-characters.directive';
import { CreditCardDirective } from './directive/credit-card.directive';
import { DifferenceDatePipe } from './pipe/date-difference.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe'; 
import { ProfileAbbreviatorPipe } from './pipe/profile-abbreviator.pipe'; 
import { CountdownDirective } from './directive/countdown.directive';
import { CurrencyFormatterDirective } from './directive/currency.directive';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgstCommonUtilsComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective,
    DifferenceDatePipe,
    SearchFilterPipe,
    ProfileAbbreviatorPipe,
    CountdownDirective,
    CurrencyFormatterDirective,
  ],
  exports: [
    NgstCommonUtilsComponent,
    NoSpecialCharactersDirective,
    CreditCardDirective,
    DifferenceDatePipe,
    SearchFilterPipe,
    ProfileAbbreviatorPipe,
    CountdownDirective,
    CurrencyFormatterDirective
  ]
})
export class NgstCommonUtilsModule { }
