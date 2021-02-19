import React, { Component } from 'react';

class detail extends Component {
    render() {
        var {match} = this.props;
        return (
            <div>
                <h1>This is page detail product {match.params.id}</h1>
            </div>
        );
    }
}

export default detail;