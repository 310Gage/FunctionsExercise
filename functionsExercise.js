function fozzieBear () {
    console.log('Wocka Wocka!');
}
fozzieBear()

function beaker (speak) {
    console.log(speak.repeat(5));
}
beaker ('Meep ')

function muppetShow (a , b) {
    if (a == 'Muppet' && b == 'Show'){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

function kermit () {
    return 'Kermit The Frog';
}

function muppetShowSeasons (seasons) {
    if (seasons == 5){
        return true
    }else {
        return false
    }
}

const manOrMuppet = function () {
    console.log(`Am I a man or am I a Muppet?`);
}

rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;

// 8 - No

// 9 - Yes

const newMuppetMovies = [`The Mupppets`, `The Muppets Most Wanted`];

const upperMovies = newMuppetMovies.map(function(i){
    return i.toUpperCase();   
});
console.log(upperMovies);