/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormatter]'
})
/**
 * @export
 * @class Currency Formatter Directive
 */
export class CurrencyFormatterDirective {
  // tslint:disable-next-line:variable-name
  private _value!: string | null;

  constructor(private elementRef: ElementRef<HTMLInputElement>,
  ) { }

  get value(): string | null {
    return this._value;
  }

  @Input('value')
  set value(value: string | null) {
    this._value = value;
    this.formatValue(value);
  }

  /**
   * Format the passed value
   * @param value 
   */
  private formatValue(value: string | null) {
    if (value !== null) {
      this.elementRef.nativeElement.value = this.numberWithCommas(value);
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  /**
   * Reset input by removing commas
   */
  private unFormatValue() {
    const value = this.elementRef.nativeElement.value;
    this._value = value.replace(/[^\d.-]/g, '');
    if (value) {
      this.elementRef.nativeElement.value = this._value;
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  /**
   * Format input by adding commas
   * @param number 
   * @returns 
   */
  private numberWithCommas(number: any) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    // here we cut any non numerical symbols    
    this._value = value.replace(/[^\d.-]/g, '');
  }

  @HostListener('blur')
  _onBlur() {
    this.formatValue(this._value); // add commas
  }

  @HostListener('focus')
  onFocus() {
    this.unFormatValue(); // remove commas for editing purpose
  }
}
