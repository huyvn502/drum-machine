import React, { Component } from 'react';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
    }
    playSound() {
        const audio = new Audio(this.props.drumKey.url);
        audio.play();
        document.getElementById(this.props.drumKey.keyTrigger).style.backgroundColor = "#1874ec";
        setTimeout(() => {
            document.getElementById(this.props.drumKey.keyTrigger).style.backgroundColor = "rgb(235, 241, 253)";
        },200);
        this.props.setKeyDisplay(this.props.drumKey.keyName);
    }
    render() {
        return (
            <div className="drum-pad">
                <button onClick={this.playSound} id={this.props.drumKey.keyTrigger}>{this.props.drumKey.keyTrigger}</button>
                <audio className="clip" src={this.props.drumKey.url}>
                </audio>
            </div>
        );
    }
}

export default DrumPad;
