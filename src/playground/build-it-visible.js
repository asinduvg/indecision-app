let appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleBtn = this.handleToggleBtn.bind(this);
        this.state = {
            showDetails: false
        }
    }

    handleToggleBtn() {
        this.setState(prevState => {
            return {
                showDetails: !prevState.showDetails
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button
                    onClick={this.handleToggleBtn}>{this.state.showDetails ? 'Hide details' : 'Show details'}</button>
                {this.state.showDetails && <p>Lorem ipsum dolor sit amet.</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle/>, appRoot);

// const renderApp = () => {
//     const markup = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleBtn}>{showDetails ? 'Hide details' : 'Show details'}</button>
//             {showDetails && <p>Lorem ipsum dolor sit amet.</p>}
//         </div>
//     );
//
//     ReactDOM.render(markup, appRoot);
// }
//
// const toggleBtn = () => {
//     showDetails = !showDetails;
//     renderApp();
// }
//
// renderApp();

