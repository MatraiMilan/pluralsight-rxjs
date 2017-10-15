import { Observable/*, Observer*/ } from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

function load(url: string) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);

            observer.next(data);
            observer.complete();
        });

        xhr.open("GET", url);
        xhr.send();
    });
}

function renderMovies(movies: { title: string }[]) {
    output.innerHTML = null;
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

click.flatMap(e => load("movies.json"))
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