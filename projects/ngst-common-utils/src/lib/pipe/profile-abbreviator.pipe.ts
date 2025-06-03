import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'profileAbbreviator'
})
export class ProfileAbbreviatorPipe implements PipeTransform {
    letters: any;

    transform(value: any, length: number = 2): any {
        this.letters = (value.match(/\b(\w)/g));
        return this.letters ? this.letters.slice(0, length).join('').toUpperCase() : '';
    }

}