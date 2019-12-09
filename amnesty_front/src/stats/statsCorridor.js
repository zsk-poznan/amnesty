import React, { Component } from 'react';
import MailAmount from './mail_amount/mail_amount';
import PplRanking from './ppl_ranking/ppl_ranking';
import ClassRanking from './class_ranking/class_ranking';
import './stats.css';

class StatsCorridor extends Component {
    constructor() {
        super();
        this.stats = React.createRef();
        this.state = {
            update: false,
            ppl: [],
            total: 1000,
            info: [],
            luckyNumber: 16
        };
    }
    componentDidMount() {
        this.setState({ppl:[
            { name: 'Młodzież z Grassy Narrows', amount: 0 },
            { name: 'Ibrahim Ezz El-Din', amount: 0 },
            { name: 'José Adrián', amount: 0 },
            { name: 'Nasu Abdulaziz', amount: 0 },
            { name: 'Magai Matiop Ngong', amount: 0 },
            { name: 'Emil Ostrowko', amount: 0 },
            { name: 'Sarah Mardini i Seán Binder', amount: 0 },
            { name: 'Yiliyasijiang Reheman', amount: 0 },
            { name: 'Marinel Sumook Ubaldo', amount: 0 },
            { name: 'Yasaman Aryani', amount: 0 },
         ]});
         this.setState({total:1000});
         this.setState({info:[ { name: "2E", amount: 0 }, { name: "2A", amount: 0 }, { name: "3A", amount: 0 }, { name: "1A", amount: 0 }, { name: "1GA", amount: 0 } ]});
        
        const fetchData = () => {
            fetch(`http://${window.location.hostname}:3001/pplRanking/rank`)
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({ppl:responseJson.data});
            })
            fetch(`http://${window.location.hostname}:3001/total/total`)
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({total:responseJson.data});
            })
            fetch(`http://${window.location.hostname}:3001/classRanking/rank`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({info:responseJson.data});
            })
            fetch(`http://${window.location.hostname}:3001/luckyNumber/LuckyNumber`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({luckyNumber:responseJson.data});
            })
        }
        let ypos = 0;
        fetchData()
        setInterval(() => {
            fetchData()
        }, 5000);
        setInterval(() => {
            if (ypos === 300) {
                ypos = 0;
                this.stats.current.style.transition = `all 0s ease`;
                this.stats.current.style.transform = `translateY(-${ypos}vh)`;
                setTimeout(() => {
                    this.setState({
                        update: true
                    })
                    ypos = 100;
                    this.stats.current.style.transition = `all 1s ease`;
                    this.stats.current.style.transform = `translateY(-${ypos}vh)`;
                    console.log("update")
                }, 100)
            } else {
                this.setState({
                    update: false
                })
                ypos += 100;
                this.stats.current.style.transition = `all 1s ease`;
                this.stats.current.style.transform = `translateY(-${ypos}vh)`;
            }
        }, 30000);
    }
    render() {
        return (
            <div className="stats-wrap-c">
                <div className="luckyNumber">
                    <h1>{this.state.luckyNumber}</h1>
                    <h2>Szczęśliwy Numerek</h2>
                </div>
                <div className="stats" ref={this.stats}>
                    <PplRanking people={this.state.ppl}/>
                    <MailAmount update={this.state.update} total={this.state.total} />
                    <ClassRanking info={this.state.info} />
                    <PplRanking people={this.state.ppl}/>
                </div>
            </div>
        );
    }
}

export default StatsCorridor;
