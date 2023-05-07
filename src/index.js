async function jokeFunc(){
    let p = await fetch("https://official-joke-api.appspot.com/random_joke");
    let value = await p.json();
    let {type, setup, punchline, id} = value;
    document.getElementById("joke_set").innerHTML = setup;
    document.getElementById("joke_pline").innerHTML = punchline;
}
jokeFunc();
