import React, { Component } from 'react';

class DrumDisplay extends Component {
    render() {
        return (
            <div id="display">
                <h3>{this.props.keyDisplay}</h3>
            </div>
        );
    }
}

export default DrumDisplay;
