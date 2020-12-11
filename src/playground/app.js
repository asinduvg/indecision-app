class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() { // only accessible within classes
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }

        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(option) {
        this.setState(prevState => {
            const index = prevState.options.indexOf(option);
            return {
                options: prevState.options.splice(index, 1)
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        return alert(this.state.options[randomNum]);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({options: prevState.options.concat([option])}));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length} pick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = props => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.pick}>What should I do next?</button>
        </div>
    );
}

const Options = props => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((el, i) => <Option item={el} key={i} handleDeleteOption={props.handleDeleteOption}/>)}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    );
}

const Option = props => {
    return (
        <div>
            {props.item}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.item)
                }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';

        this.setState(() => ({error}));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option'/>
                    <button type="submit">add option</button>
                </form>
            </div>
        );
    }
}

// const User = () => {
//     // stateless functional component
//     return (
//         <div>
//             <p>Name:</p>
//             <p>Age:</p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));