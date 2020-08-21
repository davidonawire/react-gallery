# React Gallery
This app was built as a demonstration of core React patterns for building a single-page app, in this case also making use of React Router and JavaScript's native `fetch()` methods. The app accesses the Flickr API to display 25 photos, either through one of three pre-set categories, or through a user-entered search term. A single component, `<SearchResults>`, is responsible for fetching and parsing photo data from the Flickr API and passing it to a stateless `<Gallery>` component which renders the grid of `<Photo>` components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, run:

`npm install`

In `/src`, create a file `config.js` with the following lines, replacing `API_KEY` with your own [Flickr API key](https://www.flickr.com/services/apps/create/apply/).

```
const apiKey = 'API_KEY';
export default apiKey;
```

To start the app, run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

