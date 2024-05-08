const otpGenerator = {
    generate: function(length, options) {
        let allowedChars = '0123456789'; 
        if (options.upperCaseAlphabets) {
            allowedChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (options.lowerCaseAlphabets) {
            allowedChars += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (options.specialChars) {
            allowedChars += '!@#$%^&*()-_+=~`[]{}|;:,.<>?';
        }

        if (!allowedChars) {
            throw new Error("At least one character type must be allowed");
        }

        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
        }
        return randomString;
    }
};

export default otpGenerator;

// // Example usage:
// let otp = otpGenerator.generate(6, {
//     upperCaseAlphabets: false,
//     specialChars: false,
//     lowerCaseAlphabets: false,
// });
// console.log(otp);
