import React from 'react';
import PersonBar from './person_bar';
import './ppl_ranking.css';

const PplRanking = (props) => {
    const createPerson = () => {
        let highestAmount = 0;
        if (props.people && props.people[0]) {
            for (let j = 0; j < 10; j++) {
                if (props.people[j].amount > highestAmount) {
                    highestAmount = props.people[j].amount;
                }
            }
            let color = 101010
            const personTable = []
            for (let k = 0; k < 10; k++) {
                personTable.push(<PersonBar key={k} highest={highestAmount} amount={props.people[k].amount} name={props.people[k].name} color={`#${color}`} />)
                if (color > 303030) {
                    color = 202020
                }
                else {
                    color += 252525
                }
            }
            return (personTable)
        }
    }
    return (
        <div className="ranking">
            <h1>Napisane Listy</h1>
            {createPerson()}
        </div>
    );
}

export default PplRanking;
