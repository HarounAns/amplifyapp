import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.componentMap[this.props.component]
        )
    }
}