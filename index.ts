import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/scan
// Example 1: Sum over time

const srcList$ = of(1, 2, 3, 4, 5, 6);
// basic scan example, sum over time starting with zero
const example = srcList$.pipe(scan((acc, curr) => acc + curr, 0));
const subscribe = example.subscribe((val) => console.log(val));
// output: 1,3,6,10,15,21
