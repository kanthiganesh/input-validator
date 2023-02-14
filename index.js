export function isValidUrl(url){
    var expression =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(!url.match(regex)) 
       return false;
    else 
        return true;
}

export function isNumber(val){
    return /^\d+$/.test(val);
}
 
 
export function isValidEmail(val){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return val.match(validRegex) ? true :false;
}