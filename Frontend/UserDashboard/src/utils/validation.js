
const signInValidation = (email, password)=>{
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if(!isEmailValid)return "Please enter valid email-id";
    if(!isPasswordValid)return "Please enter valid password";

    return null;

}

const signUpValidation = (firstname, lastname, email, password)=>{
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const nameRegex = /^[a-zA-Z]+$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const isFirstnameValid = nameRegex.test(firstname);
    const isLastnameValid = nameRegex.test(lastname);

    if(!isFirstnameValid)return "Please enter valid firstname";
    if(!isLastnameValid)return "Please enter valid lastname";

    if(!isEmailValid)return "Please enter valid email-id";
    if(!isPasswordValid)return "Please enter valid password";

    return null;
}

export {signInValidation, signUpValidation}