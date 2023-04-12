import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appNoSpecialCharacters]'
})
export class NoSpecialCharactersDirective {
    @Input() includeChars: string = '';

    private regex: RegExp = new RegExp(/^[a-zA-Z0-9]+$/);

    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if (this.includeChars !== '') {
            this.regex = new RegExp(`^[a-zA-Z0-9${this.includeChars}]+$`);
        }

        if (!this.regex.test(event.key)) {
            event.preventDefault();
        }
    }
}