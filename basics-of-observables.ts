import {Observable/*, Observer*/} from "rxjs";

//YOU CAN REDUCE SIGNIFICANT AMOUNT OF KB-S OF DATA IF YOU IMPORT ONLY WHAT YOU USE
/*import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";*/


let numbers = [1, 5, 10];
//CAN CREATE OBSERVABLE FROM AN ARRAY FOR EXAMPLE
//let source = Observable.from(numbers);

//CREATE OWN OBSERVABLE
let source2 = Observable.create(observer => {
    
    let index = 0;
    let produceValue = () => {
       
        observer.next(numbers[index++]);

        if(index < numbers.length) {
            setTimeout(produceValue, 2000);
        } else {
            observer.complete();
        }
    };

    produceValue();
    
})
    .map(n => n * 2)
    .filter(n => n > 4)
;

/*source.subscribe(
    // I CAN USE ONLY THE FIRST CALLBACK PARAMETER FUNCTION (THE SECOND AND THIRD CALLBACK FUNCTION IMPLEMENTATION IS NOT NEEDED)
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);*/

source2.subscribe(
    // I CAN USE ONLY THE FIRST CALLBACK PARAMETER FUNCTION (THE SECOND AND THIRD CALLBACK FUNCTION IMPLEMENTATION IS NOT NEEDED)
    value => {console.log(`value: ${value}`)},
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