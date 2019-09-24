# Course Book

Create a course, add students, then easily pick a random student, or create a list of random pairs of students from your roster. 

Check it out live on GItHub Pages [here](https://soggybag.github.io/course-book-react/). 

This app stores everything in local storage so all of the courses and students should be there again when you return _provided your are visitng the site from the same computer!_. 

## Features

Manage a list of courses in the left column. You can add and remove courses. _There is no warning when removing a course_ all of your students are removed when removing a course. 

- Type a name into the field and click + to add a course. 
  - _Names must be unique_
- Select a class by choosing it in the left column. 
- Remove a course by clicking the - nect to the course name. 
  - There is no warning, removing a course removes all students in that courses roster. 

Add students to a course in the center column. Pick a random student by clicking "Pick Student". _Picking a student will not repeat a pick until all have been picked_.

- Add students name click + to add that student to the selected course
- Click - next to a student name to remove that student from the course list. 
  - There is no warnings 
- Click "Pick Student" to display a random student in the right column. 
  - Students are not repeated until all have been chosen
- Click "Pair Students" to generate a random list of student pairs shown in the right column. 
  - Pairs are random and may be repeated.

## Contributions

If you'd like to contribut to this project please do! Take a look at the list of todos below. Then take a look at the [Contributing](contributing.md) guidelines.

## Todo

- Responsive design
  - Shows single column on mobile with columns sliding left and right. 
  - Should work well on mobile
  - Can be saved to home screen see PWA below
- PWA FTW! This could be turned into a Progressive Web App. 
  - Should run offline
- Names of students and courses muct be unique
  - Need to check case on this. Currently names are trimmed of white space. Names should keep case but checked for match regardless of case. 
- Need feedback on usage 
- All pairs combinations 
  - The app should generate a different list of pairs until all possible combinations have been used. 
- Track the number of times a student has been picked. 
  - Count the number of times a student has been picked. 
  - Show the count next to the name. 

--- 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
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
