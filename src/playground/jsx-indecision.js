console.log('app.js is running');

// JSX = Javascript XML
// var template = React.createElement('h1', {id: 'someId'}, 'something new'); same alternative to the code above

let appRoot = document.getElementById('app');

let app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = e => {

    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

    }
    renderApp();

}
const removeOptions = () => {
    app.options = [];
    renderApp();

}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {app.options.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
            <button onClick={removeOptions}>Remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();