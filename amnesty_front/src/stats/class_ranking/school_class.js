import React from 'react';
import './class_ranking.css';

const SchoolClass = (props) => {
    let ww = props.maxAmount;
    if (props.highest===0) {
        ww = 1;
    }
    const barWidth = ((props.amount/ww)*78)+2;
    let styleB = {
        width: `${barWidth}%`,
        height: `12.5vh`,
        backgroundColor: props.color
    }
    if (props.maxAmount===0) {
        styleB = {
            marginTop: '70vh',
            width: `2%`,
            height: `12.5vh`,
            backgroundColor: props.color
        }
    }
    return (
        <div className="schoolclass">
            <p>{props.name}</p>
            <div className="bar" style={styleB}><p>{props.amount}</p></div>
        </div>
    );
    
}

export default SchoolClass;