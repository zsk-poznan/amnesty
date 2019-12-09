import React from 'react';
import './ppl_ranking.css';

const PersonBar = (props) => {
    let hh = props.highest;
    let styleB = {};
    if (props.highest===0) {
        styleB.marginTop = '70vh'
        hh = 1;
    }
    const barHeight = ((props.amount)/(hh)*70)+1;
    let styleP = {
        top: '-2vh',
        transform: 'translate(0, 50%)'
    }
    styleB = {
        height: `${barHeight}vh`,
        backgroundColor: props.color
    }
    if (props.highest===0) {
        styleB.marginTop = '70vh'
    }
    if (barHeight < 10) {
        styleP = {
            transform: 'translate(0, 0) !important',
            top: '-7vh',
            color: '#000'
        }
    }
    return (
        <div className="person">
            <div className="bar" style={styleB}><p style={styleP}>{props.amount}</p></div>
            <p>{props.name}</p>
        </div>
    );
    
}

export default PersonBar;