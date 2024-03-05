function shout(string) {
    return string.toUpperCase();
  }


  function whisper(string) {
    // Convert the string to lowercase and return it
    return string.toLowerCase();
}

function logWhisper(string) {
    console.log (string.toLowerCase());
}


function logShout (string) {
    console.log(string.toUpperCase())
}

function sayHiToHeadphonedRoommate (string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

sayHiToHeadphonedRoommate('I LOVE YOU')