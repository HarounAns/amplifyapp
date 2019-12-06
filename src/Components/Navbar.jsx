import React from 'react';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark" onClick={(event) => this.props.setComponent(event.target.innerHTML)}>
                    <a class="navbar-brand" href="#">Member Admin Portal</a>
                    <a class="navbar-brand" href="#">Provider Search</a>
                    <a class="navbar-brand" href="#">Performance Management</a>
                    <a class="navbar-brand" href="#">Care Redesign</a>
                </nav>
            </div>
        )
    }
}