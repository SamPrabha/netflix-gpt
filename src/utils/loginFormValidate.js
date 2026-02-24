export const loginFormValidate = (email, password, fullName) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!isEmailValid) return 'Email ID is not valid';
    if (!isPasswordValid) return 'Password is not valid';
    if (fullName !== null) {
        const isFullNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(fullName);
        if (!isFullNameValid) return 'Name is not valid';
    }
    return null;
}