/**
 * Created by olinnyk on 10/5/16.
 */


import React from 'react';
import { connect } from 'react-redux';

export class App extends  React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return <div>Привет из App, { this.props.user }!</div>
    }

}

function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)