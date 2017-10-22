import { Observable/*, Observer*/ } from "rxjs";
import {load, loadWithFetch} from "./loader.ts";

//TRY OUT ERROR HANDLING
/* let source = Observable.merge(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
).catch(e => {
    console.log(`caught: ${e}`);
    return Observable.of(10);
});

source.subscribe(
    val => console.log(`value: ${val}`),
    err => console.log(`error: ${err}`),
    () => console.log('complete')
    
); */


let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");


function renderMovies(movies: { title: string }[]) {
    output.innerHTML = null;
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription = load('moviess.json').subscribe(
    renderMovies,
    err => console.log(`error: ${err}`),
    () => console.log('complete!')
);
subscription.unsubscribe();


click.flatMap(e => loadWithFetch("movies.json"))
    .subscribe(
    renderMovies,
    error => console.log(`error: ${error}`),
    () => console.log('complete')
    );

//SUBSCRIBE INSIDE OTHER SUBSCRIBE IS POSSIBLE BUT NOT THE BEST WAY -> USE FLATMAP OPERATOR INSTEAD
// click.subscribe(
//     e => load("movies.json").subscribe(renderMovies),
//     error => console.log(`error: ${error}`),
//     () => console.log('complete')
// );