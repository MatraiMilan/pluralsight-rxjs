import {Observable/*, Observer*/} from "rxjs";

let numbers = [1, 5, 10];
//CAN CREATE OBSERVABLE FROM AN ARRAY FOR EXAMPLE
//let source = Observable.from(numbers);

//CREATE OWN OBSERVABLE
let source2 = Observable.create(observer => {
    for(let number of numbers) {
        observer.next(number);
    }

    observer.complete();
});

/*source.subscribe(
    // I CAN USE ONLY THE FIRST CALLBACK PARAMETER FUNCTION (THE SECOND AND THIRD CALLBACK FUNCTION IMPLEMENTATION IS NOT NEEDED)
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);*/

source2.subscribe(
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