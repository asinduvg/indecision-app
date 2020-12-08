let appRoot = document.getElementById('app');

let showDetails = false;

const renderApp = () => {
    const markup = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleBtn}>{showDetails ? 'Hide details' : 'Show details'}</button>
            {showDetails && <p>Lorem ipsum dolor sit amet.</p>}
        </div>
    );

    ReactDOM.render(markup, appRoot);
}

const toggleBtn = () => {
    showDetails = !showDetails;
    renderApp();
}

renderApp();

