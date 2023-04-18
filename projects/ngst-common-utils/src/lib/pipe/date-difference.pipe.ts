import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'diffDate'
})

export class DifferenceDatePipe implements PipeTransform {
    transform(date: string, ...args: any[]) {
        let currentDate = new Date();
        let futureDate = new Date(date);

        // calculate the time difference of two dates JavaScript
        let diffTime = (futureDate.getTime() - currentDate.getTime());

        // calculate the number of days between two dates javascript
        let numberOfDays = diffTime / (1000 * 3600 * 24);

        console.log(date);
        console.log(currentDate);
        console.log(numberOfDays);
        return Math.round(numberOfDays);
    }
}