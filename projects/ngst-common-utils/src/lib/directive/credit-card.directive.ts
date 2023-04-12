import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  @HostListener('input', ['$event'])

  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let trim = input.value.replace(/\s+/g, '');

    // regex only allow groupNumbers and not string or special characters
    let numbers = trim.replace(/[^0-9]/g,'');

    if (numbers.length > 16) {
      numbers = numbers.substr(0, 16);
    }

    let groupNumbers = [];
    for (let i = 0; i < numbers.length; i += 4) {
      groupNumbers.push(numbers.substr(i, 4));
    }

    input.value = groupNumbers.join(' ');
  }

}
