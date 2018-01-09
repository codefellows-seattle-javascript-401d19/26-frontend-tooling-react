401 JS --  Lab 26 Cowsay
===

## React w/ Cowsay

## Description

This application is a simple demonstration of the power of React and Webpack.  This application uses webpack to compile main.js into a bundle along with two other NPM packages, including cow and faker, as well as bringing SASS styling along for the ride, which compiles as CSS.  Babel does the work to transpile our JSX and ES6 syntax to ES5.  

The React functionality is handled by an App constructor which holds state with one property, the content created by faker.  This is used within the refreshCow() method which is then called when the button is clicked.  This click updates the content held in state and the cow's message is refreshed as a result.
