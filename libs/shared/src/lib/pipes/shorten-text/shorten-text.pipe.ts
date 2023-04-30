import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenText',
    standalone: true,
})
export class ShortenTextPipe implements PipeTransform {
    transform(value: string | null, length: number): string {
        console.log(value);
        if(value && length) {
            return value.length > length ? value.substring(0, length) + '...' : value;
        }
        return '';
    }
}
