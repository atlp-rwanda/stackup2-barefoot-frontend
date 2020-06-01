# stackup2-barefoot-frontend

[![Build Status](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend.svg?branch=develop)](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend)  [![Test Coverage](https://api.codeclimate.com/v1/badges/3b653dc153a951875992/test_coverage)](https://codeclimate.com/github/Stackup-Rwanda/stackup2-barefoot-frontend/test_coverage)  [![Codacy Badge](https://app.codacy.com/project/badge/Grade/fe79265b9e524b9bb21f1204c2b1c46b)](https://www.codacy.com/gh/Stackup-Rwanda/stackup2-barefoot-frontend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Stackup-Rwanda/stackup2-barefoot-frontend&amp;utm_campaign=Badge_Grade)

## To run it locally
### A. Pre-requisites: 
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
4. [Storybook](https://storybook.js.org/docs/guides/guide-react/)
5. [Enzyme](https://enzymejs.github.io/enzyme/)

### E. Deployments
- This application is deployed on heroku, we have two different versions, which are different by the app status, in staging mode or ready for production.

- When the app is in staging mode is available on this link `https://stackup-barefoot.herokuapp.com/` => This deployment happens automatically, whenever there is a new merging to develop branch

- When the app is ready for production is available on this link `https://immense-chamber-27847.herokuapp.com/`
- Whenever a new PR is opened, there is a new review app which is created and accessible in the browser which helps to access visualize your PR in the browser to check if it working as you wanted it to work.



