import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';

import { Chart, Tooltip, Title, ArcElement, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Import from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2';
Chart.register(
    Tooltip, Title, ArcElement, Legend, CategoryScale, LinearScale, BarElement
)

function AnalysisEmpVsTime() {
    //Employees vs Hours
    const [option, setOption] = useState(null);
    const onChange = (e) => {
        setOption(e.target.value);
    };
    const [pie, setPie] = useState(
        {
            datasets: [{
                data: [],
                backgroundColor: []
            }
            ],
            labels: []
        })

    const [bar, setBar] = useState(
        {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                borderColor: []
            }
            ]
        }
    )

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const res = await fetch("http://localhost:3218/getAllEmployees", {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const dataa = await res.json();

                const label = [];

                for (var i of dataa) {
                    label.push(i.name);
                }

                setPie(
                    {
                        datasets: [{
                            data: [12, 4, 9, 12, 10, 15, 18],
                            backgroundColor: [
                                'black',
                                'orange',
                                'red',
                                'blue',
                                'yellow',
                                'green',
                                'gray',
                                'pink'
                            ]
                        }
                        ],
                        labels: label
                    }
                )



                setBar(
                    {
                        labels: label,
                        datasets: [{
                            label: "Employees vs Hours",
                            data: [12, 4, 9, 12, 10, 15, 18],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)',
                                'lightgreen',
                                'lightblue',
                                'orange',
                                'lightred'
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)',

                            ],
                            borderWidth: 1
                        }]
                    }
                )
            } catch (err) {
                console.log('err in info card :>> ', err);
            }
        }
        getAllProjects();
    }, [])



    return (
        <div className="container" style={{
            border: '0px solid red', display: 'flex', alignItems: 'center', flexDirection: 'column',
            height: '100%', paddingTop: '3vh'
        }}>
            <Radio.Group onChange={onChange} value={option} style={{ color: 'black', fontWeight: 'bold' }}>
                <Radio value='bar' >Bar Graph</Radio>
                <Radio value='pie'>Pie Chart</Radio>

            </Radio.Group>
            {!option && <h1 style={{ marginTop: '20vh' }}>Analysis of Employee Work</h1>}
            {
                option === 'pie' &&
                <div style={{ width: "35%", height: "35%", marginTop: '5vh' }}>
                    <Pie data={pie} />
                </div>
            }
            {
                option === 'bar' &&
                <div style={{ width: "68%", height: "68%", marginTop: '5vh' }}>
                    <Bar data={bar} />
                </div>
            }
        </div>
    );
}

export default AnalysisEmpVsTime;