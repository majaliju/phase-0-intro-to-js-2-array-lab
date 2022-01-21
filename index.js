const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name="Ralph"){
    return cats.push(name);
}

function destructivelyPrependCat(name="Bob"){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name="Broom"){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name="Arnold"){
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1, 3);
}