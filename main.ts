import {Observable, Observer} from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.from(numbers);

source.subscribe(
    // I CAN USE ONLY THE FIRST CALLBACK PARAMETER FUNCTION (THE SECOND AND THIRD CALLBACK FUNCTION IMPLEMENTATION IS NOT NEEDED)
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);

/*class MyObserver implements Observer<number> {

    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
        
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new MyObserver());*/