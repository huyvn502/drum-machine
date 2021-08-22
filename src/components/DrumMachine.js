import React, { Component } from 'react';
import DrumPad from './DrumPad';
import DrumDisplay from './DrumDisplay';

const listDrumPad = [
    {
      keyTrigger: 'Q',
      keyName: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyTrigger: 'W',
      keyName: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyTrigger: 'E',
      keyName: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyTrigger: 'A',
      keyName: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyTrigger: 'S',
      keyName: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyTrigger: 'D',
      keyName: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyTrigger: 'Z',
      keyName: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyTrigger: 'X',
      keyName: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyTrigger: 'C',
      keyName: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyDisplay: '-'
        }
        this.setKeyDisplay = this.setKeyDisplay.bind(this);
    }
    setKeyDisplay(nameValue) {
        this.setState({keyDisplay: nameValue});
    }
    componentDidMount() {
        document.addEventListener("keypress", (event) => {
            for(let index in listDrumPad) {
                if (event.key.toUpperCase() === listDrumPad[index].keyTrigger) {
                    const audio = new Audio(listDrumPad[index].url);
                    audio.play();
                    document.getElementById(event.key.toUpperCase()).style.backgroundColor = "#1874ec";
                    setTimeout(() => {
                        document.getElementById(event.key.toUpperCase()).style.backgroundColor = "rgb(235, 241, 253)";
                    },200);
                    this.setKeyDisplay(listDrumPad[index].keyName);
                    break;
                }
            }
        });
    }
    render() {
        const drumContainer = listDrumPad
        .map((currentValue) => <DrumPad drumKey={currentValue} setKeyDisplay={this.setKeyDisplay} />);
        return (
            <div id="drum-machine">
                <div id="drum-container">
                    {drumContainer}
                </div>
                <DrumDisplay keyDisplay={this.state.keyDisplay}></DrumDisplay>
            </div>
        );
    }
}

export default DrumMachine;
