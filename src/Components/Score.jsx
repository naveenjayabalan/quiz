// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
            </>
        );
    }
}

export default Score;