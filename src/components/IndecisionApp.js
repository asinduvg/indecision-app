import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption = (option) => {
        this.setState(prevState => {
            const index = prevState.options.indexOf(option);
            return {
                options: prevState.options.splice(index, 1)
            }
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            }
        });
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({options: prevState.options.concat([option])}));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
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

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className='container'>
                    <Action hasOptions={this.state.options.length} pick={this.handlePick}/>
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                             handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                             handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}