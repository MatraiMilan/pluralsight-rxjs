import { Observable/*, Observer*/ } from "rxjs";

let circle = document.getElementById("circle");

let source = Observable.fromEvent(document, "mousemove")
    .map((event: MouseEvent) => {
        return {
            x: event.clientX,
            y: event.clientY
        };
    })
    .filter(value => value.x < 500)
    .delay(300);


function nextVal(value) {    
    circle.style.left = (value.x - 10) + "px";
    circle.style.top = (value.y - 10) + "px";   
}

source.subscribe(
    nextVal,
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);