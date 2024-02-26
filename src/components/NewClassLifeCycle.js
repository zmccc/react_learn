import React, { Component } from 'react';

export default class NewClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', prevState);
        return {
            count: prevState.count,
        };
    }

    componentDidMount = () => {
        console.log('componentDidMount');
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('shouldComponentUpdate', nextState);
        return true;
    };

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate', prevState);
        return null;
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate', prevState);
    };

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        console.log('render', this.state);
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd}>+1</button>
            </div>
        );
    }
}
