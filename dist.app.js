// /// <reference path="./Validation.ts" />
// /// <reference path="./LettersOnlyValidator.ts" />
// /// <reference path="./ZipCodeValidator.ts" />
//
// // Some samples to try
// import {StringValidator,Validation} from "./Validation";
// import ZipCodeValidator = Validation.ZipCodeValidator;
// import LettersOnlyValidator = Validation.LettersOnlyValidator;
//
//
// let strings = ["Hello", "98052", "101"];
//
// // Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();
// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }
// /// <reference path="./Validation.ts" />
// import {StringValidator} from "./Validation";
//
// namespace Validation {
//     const lettersRegexp = /^[A-Za-z]+$/;
//
//     export class LettersOnlyValidator implements Validation.StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }
// }
// namespace Validation {
//     export interface StringValidate {
//         isAcceptable(s: string): boolean;
//     }
//
//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;
//
//     export class LettersOnlyValidate implements StringValidate {
//         isAcceptable(s: string): boolean {
//             return lettersRegexp.test(s);
//         }
//     }
//
//     export class ZipValidate implements StringValidate {
//         isAcceptable(s: string): boolean {
//             return numberRegexp.test(s);
//         }
//     }
// }
//
// let strings = ["Hello", "98052", "101"];
//
// let validators: { [s:string]: Validation.StringValidate; } = {};
// validators["letters only"] = new Validation.LettersOnlyValidate();
// validators["zip code"] = new Validation.ZipValidate();
//
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`i like this ${s}`);
//         console.log(` "${s}"  - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }
// /// <reference path="Validation.ts" />
// import {StringValidator} from "./Validation";
//
// namespace Validation {
//     const numberRegexp = /^[0-9]+$/;
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }
//# sourceMappingURL=dist.app.js.map