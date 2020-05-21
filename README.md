# stackup2-barefoot-frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability) [![Build Status](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend.svg?branch=develop)](https://travis-ci.org/Stackup-Rwanda/stackup2-barefoot-frontend)

## General Overview
*   Make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web.

## Getting started

### Pre-requisites for this application  
*   To be able to test this project locally, you need to have the following tools on your local machine:
> *   You need to have [NodeJS version between `6` higher](https://nodejs.org/en/) and [npm version `6` or higher](https://www.npmjs.com/) or [yarn v1.15.0 or higher](https://yarnpkg.com/getting-started/install)
> *   Your local machine needs to be able to run terminal, Powershell, or bash commands
> *   You need to have a text editor installed in your machine
> *   Install a `Live Sass Compiler` in your text editor especially `Visual studio code` therefore you can work with `Sass` easier.
> *   You need to download and install Git in your machine [Git download link](https://git-scm.com/downloads)

## Installation
1. Clone this repo by running `git clone https://github.com/Stackup-Rwanda/stackup2-barefoot-frontend.git`
2. Install all needed dependencies by running `npm install` or `yarn`
3. Create a `.env` file
4. Copy all of the fields from `.env.example`, paste them in `.env` file and provide values for them
5. Start Local server by running `npm start` or `yarn start` to run it in production mode.
6. `yarn run dev` to run it in development mode.
7. Go to `http://localhost:{{PORT}}/`   =>{{PORT}} : is the port number that you precise in your `.env` file

## Description 

### Tools used
1. [Webpack 4](https://webpack.js.org/) for bundling
2. [Express](https://expressjs.com/) for serving the frontend
3. [GitHub and Git](https://github.com/) for Version control
4. [TravisCI](https://travis-ci.org/) for continuous integration
5. [JestJS](https://jestjs.io/docs/en/webpack) for testing
6. [Enzyme](https://enzymejs.github.io/enzyme/docs/installation/) for DOM testing

## Dependencies
1. [node-sass](https://www.npmjs.com/package/node-sass)
2. [sass](https://www.npmjs.com/package/sass)
3. [sass-loader](https://www.npmjs.com/package/sass-loader)

## Test
> *   run test using `yarn test` 
