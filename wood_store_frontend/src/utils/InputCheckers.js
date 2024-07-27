export function checkLen(str){
    const minLen = 3;

    if(str.length < minLen){
        return `Length must be at least ${minLen} chars!`;
    };

    return false;
}

export function checkEmail(str){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(str)){
        return 'Incorrect email address!'
    }

    return false;
}


export function checkBulgarianPhoneNumber(str) {
    // Regular expression for Bulgarian phone number validation
    const phoneRegex = /^(0[1-9]\d{7}|08[7-9]\d{7})$/;
    if(!phoneRegex.test(str)){
        return 'Incorrect phone number!'
    }

    return false;
}