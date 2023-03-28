//receives one argument and returns it in all caps
function shout(string){
    return string.toUpperCase();
}

//receives one argument and returns it in all lowercase
function whisper(string){
    return string.toLowerCase();
}

//takes a string argument and logs it in all caps using console.log()
function logShout(string){
 console.log(shout(string));
}

//takes a string argument and logs it in all lowercase using console.log(
function logWhisper(string){
    console.log(whisper(string));
}
    
/*   returns "I can't hear you!" if `string` is lowercase
     returns "YES INDEED!" if `string` is uppercase
     returns "I would love to!" if `string` is "Let's have dinner together!"`
     */
 function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can't hear you!";
    }
    if(string === "Let's have dinner together!"){
        return "I would love to!";
    }
    if(string === string.toUpperCase()){
        return "YES INDEED!";
    }
 }
