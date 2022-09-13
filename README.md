<!--- 
Copyright © 2022 Yurii Lobas. Contacts: yurii.lobas@gmail.com
-->

# rest-backend

Current project checks api through request methods.

### Custom rest-backend features:
* **login with different accounts** application/successful logging. 
* **analyze** errors cause with detailed traces for failed requests
* **compare** different request in scripted dashboard

## Getting Started

Rest-backend consists of next services:
- **chai**: Is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- **chalk**: Terminal string styling done right.
- **mocha**: Simple, flexible, fun JavaScript test framework for Node.js & The Browse.
- **node-fetch**: A light-weight module that brings Fetch API to Node.js.
- **ts-node**: TypeScript execution and REPL for node.js, with source map and native ESM support.
- **typescript**: TypeScript is a language for application-scale JavaScript.


## Installing dependencies

1. Clone this repository
    ```git clone https://github.com/Yurii17/Rest-backend.git``` 
2. open Rest-backend dir

3. ```npm i @types/node mocha @types/mocha chai typescript node-fetch```

4. ```npm i ts-node```


## Installing

1. ```npm i```

## Run scenario

**If you are using docker**

1. ```./node_modules/.bin/ts-node ./playground.test.ts```

2. ```npm run test```
