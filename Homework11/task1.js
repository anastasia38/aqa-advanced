function Phrase(greet, name) {
    console.log(`${greet} ${name}!`);
}

setTimeout(Phrase, 6000, 'Hola,', 'Amigo');