"use strict";
// When using a library that was originally designed for regular JavaScript, we need to apply a declaration file 
// to make that library compatible with TypeScript (Get all the cool intellisense in our editor). A declaration file 
// has the extension .d.ts and contains various information about the library and its API. 
// npm install --save @types/node-fetch for intellisense with typescript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function chuckNorrisFetcher() {
    return node_fetch_1.default("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => data);
}
function chuckNorrisTester() {
    return __awaiter(this, void 0, void 0, function* () {
        let joke = yield chuckNorrisFetcher();
        console.log(joke.value);
    });
}
chuckNorrisTester();
//# sourceMappingURL=chuckNorrisFetcher.js.map