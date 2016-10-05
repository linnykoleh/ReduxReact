/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import React, { PropTypes, Component } from 'react';

export default class User extends Component {
    render() {
        const { name } = this.props;
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};