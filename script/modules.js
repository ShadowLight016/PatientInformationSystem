export function notAllowedCharacters(event) {
    switch (event.keyCode) {
        case 32: 
            document.getElementById(event.target.id).value = document.getElementById(event.target.id).value.substring(0, document.getElementById(event.target.id).value.length -1);
            console.log("Not Allowed")
            break;
    
        default:
            break;
    }
}

export function notAllowedCharactersIfEmpty(event) {
    if (document.getElementById(event.target.id).value == " ") notAllowedCharacters(event);
}