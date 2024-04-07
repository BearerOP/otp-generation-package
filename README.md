# otp-generation-package


OTP Generator
Overview
OTP Generator is a simple JavaScript module that allows you to generate one-time passwords with customizable options.
Features
* Generate one-time passwords with specified length and character options.
* Customize password generation by enabling/disabling uppercase alphabets, lowercase alphabets, and special characters.
Installation
To use the OTP Generator module in your project, you can install it via npm:

```npm install otp-generator```

Usage
Import the module into your JavaScript file:

```import otpGenerator from 'otp-generator’;```

Generating OTP
You can generate a one-time password by calling the generate method:

```let otp = otpGenerator.generate(6, {```
```upperCaseAlphabets: true,```
```specialChars: true,```
```lowerCaseAlphabets: true,```
```});```
```console.log(otp);```

Parameters
* length: Length of the OTP to generate (required).
* options: An object containing options for customizing OTP generation (optional).
    * upperCaseAlphabets: Set to true to include uppercase alphabets in the OTP (default: false).
    * lowerCaseAlphabets: Set to true to include lowercase alphabets in the OTP (default: false).
    * specialChars: Set to true to include special characters in the OTP (default: false).
Example
Generate a 6-character OTP with uppercase alphabets, lowercase alphabets, and special characters:

```let otp = otpGenerator.generate(6, {```
```upperCaseAlphabets: true,```
```specialChars: true,```
```lowerCaseAlphabets: true,```
```});```
```console.log(otp);```

## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

