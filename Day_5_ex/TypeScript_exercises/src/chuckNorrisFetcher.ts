// When using a library that was originally designed for regular JavaScript, we need to apply a declaration file 
// to make that library compatible with TypeScript (Get all the cool intellisense in our editor). A declaration file 
// has the extension .d.ts and contains various information about the library and its API. 
// npm install --save @types/node-fetch for intellisense with typescript

import fetch from "node-fetch";

interface IChuckInfo{
    id: string,
    created_at: string,
    value: string,
    icon_url: string,
    updated_at: string,
    url: string
}

function chuckNorrisFetcher(): Promise<IChuckInfo>{
    return fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => data )
  }
  async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value)
  }
  
  chuckNorrisTester();