# otp-generation-package

#otp-generator

> 'otp-generator' is simple one time password generator and can be used as password generator.
![npm](https://img.shields.io/npm/v/otp-generation)

[![NPM](https://nodei.co/npm/otp-generation.png?downloadRank=true&downloads=true)](https://nodei.co/npm/otp-generation/)

## Index
* [Install](#install)
* [Usage](#usage)
* [Test](#test)
* [License](#license)

## Install

```bash
npm install otp-generation
```

## Usage

```js
const otpGenerator = require('otp-generation')

otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

```
### generate(length, options)

**Arguments**

* `length` - length of password. Optional if `options` is optional. default length is 10.
* `options` - optional
  - `digits` - Default: `true` true value includes digits in OTP 
  - `lowerCaseAlphabets` - Default: `true` true value includes lowercase alphabets in OTP
  - `upperCaseAlphabets` - Default: `true` true value includes uppercase alphabets in OTP
  - `specialChars` - Default: `true` true value includes special Characters in OTP

## Tests

```js
npm run test
```

Example
Generate a 6-character OTP with uppercase alphabets, lowercase alphabets, and special characters:

```js
    let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    specialChars: true,
    lowerCaseAlphabets: true,
});
console.log(otp);
```

## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.


