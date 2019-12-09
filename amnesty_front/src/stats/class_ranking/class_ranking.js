import React from "react";
import './class_ranking.css';
import SchoolClass from './school_class';

const ClassRanking = (props) => {
    const createSchoolClass = () => {
        let color=101010
        const SchoolClassTable = []
        let maxAmount = 0;
        if (props.info && props.info) {
            for(let i=0; i<props.info.length; i++) {
                if (props.info[i].amount > maxAmount) {
                    maxAmount = props.info[i].amount;
                }
            }
            for (let i=0; i<props.info.length;i++){           
                SchoolClassTable.push(<SchoolClass key={i} amount={props.info[i].amount} name={props.info[i].name} color={`#${color}`} maxAmount={maxAmount}/>)
                if(color>303030){
                    color=202020
                }
                else{
                    color+=252525
                }
                console.log('a');
            }
            return (SchoolClassTable)
        }
    }
    return (
        <div className="classranking">
                <h1> Najlepsze klasy</h1>
                {createSchoolClass()}
        </div>
    )
}

export default ClassRanking;