import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'profileAbbreviator'
})
export class ProfileAbbreviatorPipe implements PipeTransform {
    letters: any;

    transform(value: any): any {
        this.letters = (value.match(/\b(\w)/g));
        return this.letters.join('').toUpperCase();
    }

}