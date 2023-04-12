import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appNoSpecialCharacters]'
})
export class NoSpecialCharactersDirective {
    @Input() acceptChars: string = '';
    
    private regex: RegExp = new RegExp(/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/);

    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if (this.acceptChars !== '') {
            // invalidates space as first and last character
            this.regex = new RegExp(`^[a-zA-Z0-9${this.acceptChars}]+(?:\s[a-zA-Z0-9]+)*$`);
        }

        if (!this.regex.test(event.key)) {
            event.preventDefault();
        }
    }
}