console.log('app.js is running');

// JSX = Javascript XML

var template = <p>asindu</p>

// var template = React.createElement('h1', {id: 'someId'}, 'something new'); same alternative to the code above

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);