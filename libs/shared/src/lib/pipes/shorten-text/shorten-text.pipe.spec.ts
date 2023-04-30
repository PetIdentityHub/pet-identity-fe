import { ShortenTextPipe } from './shorten-text.pipe';

describe('ShortenTextPipe', () => {
    it('create an instance', () => {
        const pipe = new ShortenTextPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return the same value if the length is less than the limit', () => {
        const pipe = new ShortenTextPipe();
        const value = 'test';
        const length = 5;
        expect(pipe.transform(value, length)).toEqual(value);
    });

    it('should return the same value if the length is equal to the limit', () => {
        const pipe = new ShortenTextPipe();
        const value = 'test';
        const length = 4;
        expect(pipe.transform(value, length)).toEqual(value);
    });

    it('should return the same value if the length is greater than the limit', () => {
        const pipe = new ShortenTextPipe();
        const value = 'test';
        const length = 3;
        expect(pipe.transform(value, length)).toEqual('tes...');
    });

});
