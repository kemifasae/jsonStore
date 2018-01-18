# jsonStore
A free and open JSON store service can be accessed [here](https://nestjsonstore.herokuapp.com/)

This app allows users to save their json files and access them via API calls.

As soon as the user saves the json data, a url which can be used to access the data.

The following API endpoints can be accessed:
- POST `/docs` to post new json data
- GET `/docs/:id` to get already existing json data
- UPDATE `/docs/:id` to update already existing json data
- DELETE `/docs/:id` to delete already existing json data.

## Project Dependencies
 - body-parser- NodeJs body parsing middleware,
 - express: Fast, Unopinionated web framework. Used as the web server for this application,
 - fs: To open and write into files
 - morgan: HTTP Request Logger Middleware for NodeJs,
 - nodemon: A simple monitor script for development use. For Live Reloading,
 - path: A module that provides utilities for working with file and directory paths

## Installation
- Make sure npm is installed on your system
- Navigate to a folder using your favorite terminal
- Clone this repository to that folder using https://github.com/kemifasae/jsonStore.git
- Navigate to the cloned repository
- Run `npm install` to install the dependencies
- Run `npm start` to start the application
