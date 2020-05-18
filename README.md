# stackup2-barefoot-frontend

[![Build Status](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend.svg?branch=develop)](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend)

## To run it locally
### A.Pre-requisites : 
* To be able to test this project locally, you need to have the following tools on your local machine:
> * You need to have [NodeJS version between `6` higher](https://nodejs.org/en/) and [npm version `6` or higher](https://www.npmjs.com/) or [yarn v1.15.0 or higher](https://yarnpkg.com/getting-started/install)
> * Your local machine needs to be able to run terminal, Powershell, or bash commands
### B. Steps
1. Clone this repo by running `git clone https://github.com/Stackup-Rwanda/stackup2-barefoot-frontend.git`
2. Install all needed dependencies by running `npm install` or `yarn`
3. Create a `.env` file
4. Copy all of the fields from `.env.example`, paste them in `.env` file and provide values for them
5. Start Local server by running `npm start` or `yarn start` to run it in production mode.
6. `npm run dev` or `yarn run dev` to run it in development mode.
7. Go to `http://localhost:{{PORT}}/`   =>{{PORT}} : is the port number that you precise in your `.env` file

### C. Tools used
1. [Webpack 4](https://webpack.js.org/) for bundling
2. [Express](https://expressjs.com/) for serving the frontend
3. [GitHub and Git](https://github.com/) for Version control
4. [TravisCI](https://travis-ci.org/) for continuous integration
5. [JestJS](https://jestjs.io/docs/en/webpack) for testing
6. [Enzyme](https://enzymejs.github.io/enzyme/docs/installation/) for DOM testing

### D. Dependencies
1. [node-sass](https://www.npmjs.com/package/node-sass)
2. [sass](https://www.npmjs.com/package/sass)
3. [sass-loader](https://www.npmjs.com/package/sass-loader)
