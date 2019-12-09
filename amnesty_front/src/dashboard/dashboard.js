import React, { useEffect, useState } from 'react';
import './dashboard.css';


const Dashboard = () => {
    // const [students, setStudents] = useState([
    //     {
    //         name: "Adam",
    //         surname: "Korba",
    //         class: "3E",
    //         id: "345{67899",
    //         privilege: true,
    //     },
    //     {
    //         name: "Filip",
    //         surname: "Wachowiak",
    //         class: "3E",
    //         id: "456789876",
    //         privilege: true,
    //     },
    //     {
    //         name: "Mateusz",
    //         surname: "Chlebosz",
    //         class: "3C",
    //         id: "9876123",
    //         privilege: false,
    //     }
    // ])
    // const [studentsInCanteen, setStudentsInCanteen] = useState([])
    // const moveToCanteen = (studentToMove) => {
    //     setStudents(students.filter((student) => student !== studentToMove))
    //     setStudentsInCanteen([studentToMove,...studentsInCanteen])
    // }
    // const moveToDefault = (studentToMove) => {
    //     setStudentsInCanteen(studentsInCanteen.filter((student) => student !== studentToMove))
    //     setStudents([studentToMove,...students])
    // }
    const [students, setStudents] = useState([])
    const [studentsInCanteen, setStudentsInCanteen] = useState([])
    const fetchData = () => {
        fetch(`http://${window.location.hostname}:3001/students/list`)
                .then(response => response.json())
                .then(responseJson => {
                    setStudents(responseJson.data);
                })
            fetch(`http://${window.location.hostname}:3001/students/canteen`)
                .then(response => response.json())
                .then(responseJson => {
                    setStudentsInCanteen(responseJson.data);
                })
    }
    useEffect(() => {
        setInterval(() => {
            fetchData();
        }, 5000);
    }, []);
    const moveToCanteen = (studentToMove) => {
        (async () => {
            const rawResponse = await fetch(`http://${window.location.hostname}:3001/students/post`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: studentToMove.id, name: studentToMove.name, lastname: studentToMove.lastname, class: studentToMove.class, privilege: studentToMove.privilege, canteen: true })
            });
            const content = await rawResponse.json();
        })();
        fetchData();
    }
    const moveToDefault = (studentToMove) => {
        (async () => {
            const rawResponse = await fetch(`http://${window.location.hostname}:3001/students/post`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: studentToMove.id, name: studentToMove.name, lastname: studentToMove.lastname, class: studentToMove.class, privilege: studentToMove.privilege, canteen: false })
            });
            const content = await rawResponse.json();
        })();
        fetch(`http://${window.location.hostname}:3001/students/list`)
            .then(response => response.json())
            .then(responseJson => {
                setStudents(responseJson.data);
            })
        fetch(`http://${window.location.hostname}:3001/students/list`)
            .then(response => response.json())
            .then(responseJson => {
                setStudentsInCanteen(responseJson.data);
            })
    }
    return (
        <div className="dashboard">KOKPIT
            <ul>
                {students.map((student) =>
                    <li className={"studentRow"}>
                        <span>{student.id}</span>
                        <span>{student.name} {student.lastname}</span>
                        <span>{student.class}</span>
                        <span>
                            <button onClick={() => moveToCanteen(student)}>Na stołowkę</button>
                        </span>
                    </li>)}
            </ul>
            <ul>
                {studentsInCanteen.map((student) =>
                    <li className={"studentRow"}>
                        <span>
                            <button onClick={() => moveToDefault(student)}>Do świetlicy</button>
                        </span>
                        <span>{student.id}</span>
                        <span>{student.name} {student.lastname}</span>
                        <span>{student.class}</span>
                    </li>)}
            </ul>
        </div>
    )
}

export default Dashboard;