import React, { useEffect } from 'react';
import './mail_amount.css';
import { useCountUp } from 'react-countup';

const MailAmount = (props) => {
    const { countUp, start, update } = useCountUp({
        start: 0,
        end: props.total,
        duration: 5,
        onUpdate: () => console.log('Updated!')
    });
    useEffect(() => {
        if (props.update === true) {
            start();
            update(props.total);
        }
    }, [props.update])
    return (
        <div className="amount">
            <div className="info">
                <h1>
                    {countUp}
                </h1>
                <h2>Napisanych listów</h2>
            </div>
        </div>
    );
}

export default MailAmount;