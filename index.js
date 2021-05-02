function shout(string) {
    return string.toUpperCase("HELLO!");
} 

function whisper(string) {
    return string.toLowerCase("HELLO!");
}

function logShout(string) { 
    console.log(string.toUpperCase("HELLO!"));
}

function logWhisper(string) { 
    console.log(string.toLowerCase("HELLO!"));
}

function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return ("I can't hear you!")
    } else if (string.toUpperCase() === string) {
        return ("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.")
    } 
}