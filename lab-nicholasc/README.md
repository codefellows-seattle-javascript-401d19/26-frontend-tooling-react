#Lab 26

## Author
Nicholas Carignan

## Node Package dependencies
1. "babel-core": "^6.26.0",
1. "babel-loader": "^7.1.2",
1. "babel-plugin-transform-object-rest-spread": "^6.26.0",
1. "babel-preset-es2015": "^6.24.1",
1. "babel-preset-react": "^6.24.1",
1. "cowsay": "^1.2.1",
1. "css-loader": "^0.28.8",
1. "extract-text-webpack-plugin": "^3.0.2",
1. "faker": "^4.1.0",
1. "html-webpack-plugin": "^2.30.1",
1. "lodash": "^4.17.4",
1. "node-sass": "^4.7.2",
1. "react": "^16.2.0",
1. "react-dom": "^16.2.0",
1. "resolve-url-loader": "^2.2.1",
1. "sass-loader": "^6.0.6",
1. "webpack": "^3.10.0",
1. "webpack-dev-server": "^2.10.0"

## Setup
  clone the repo by typing in

  `git clone https://github.com/ncarignan/26-frontend-tooling-react.git`

  then install the packages with

   `npm install`

  then the app is ready to be setup by running

   `npm run build`

   or if you want to make modifications to the code on the fly

   ` npm run watch`

## main.js

exports an app that produces a button on the webpage. When the button is clicked it calls on the cowsay api and generates a cow that says a random bit of lorem. The button is orange and blue.

Overall this is a react app that builds off of webpack into a bundle.js.
