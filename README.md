This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before using this project, you must have NPM to run node.js apps and react apps
## Installation
    -----MacOS-----
    Have homebrew installed from
     /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
     then call brew install node for installation
     To learn more go to (http://brew.sh)
    -----Windows-----
    Either download the msi file from (https://nodejs.org/en/)
    Or download chocolately from their official website  (https://chocolatey.org/), call cinst nodejs.install
    -----Linux-----
    Install nvm, node version manager, instructions found at (https://github.com/nvm-sh/nvm#install-script)
    Then use nvm install node to get latest version
    -----------------------------------
    Prequisites<br>
    Once you have node/npm/nvm
    Run 'npm install' in the same location as the package.json to recieve all the packages used

    Databases<br>
    Our app uses MongoDB atlas cluster or a local db set on a local machine
    For testing purposes it is recommended to use your own local db, specifically MongoDB
    For installation go too (https://www.mongodb.com/download-center/community) to run your own database locally
    More instructions on accessing the database is found at (https://github.com/mongodb/mongo/)
    
## Available Scripts

In the project directory, you can run:

### `npm start` is concurrently running react-scripts build and node app.js

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
As well as run the backend site at [http://localhost:27017](http://localhost:27017)
To only run the frontend, use react-scripts start
For backend only, use node app.js

The page will reload if you make edits.<br>
However if edits are made to the backend site, you must reload to see edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### npm start runs both frontend and backend app.js concurrently
