import { sum } from './util'

// test code from "jest" : https://jestjs.io/docs/en/getting-started.html
test('adds 1 + 2 to equal 3', () => {
    /*
        expect({recieved}).toBe({expected})에서
        recieved와 expected의 값이 다르다면 test시 FAIL을 나타냄
    */
    expect(sum(1, 2)).toBe(3);
});