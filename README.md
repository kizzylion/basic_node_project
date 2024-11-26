# basic_node_project

This is a basic node project that I created to learn the basics of node.js.

## Features

- [x] Basic routing
- [x] Static file serving
- [x] Basic 404 handling
- [x] Basic 301 redirect

## How to run

1. Clone the repository
2. Run `npm install`
3. Run `node server.js`
4. Open your browser and navigate to `http://localhost:8080`

## Routes

- localhost:808 -> Home page
- localhost:808/about -> About page
- localhost:808/contact -> Contact page
- localhost:808/about-us -> redirect to localhost:808/about
- localhost:808/any other url -> 404 page

## Static files

- All static files are served from the `views` directory.
