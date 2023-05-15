import React, { useEffect, useState } from 'react'
import download from './download.png';
import './Graph.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ResponsiveContainer
} from "recharts";

function Graph() {


    const [result, setResult] = useState()
    const filename = 'data.csv';
    const [fileSize, setFileSize] = useState(0)
    const headers = [
        {
            label: "Words", key: "word"
        },
        {
            label: "counts", key: "count"
        }
    ]

    useEffect(() => {

        fetch('https://www.terriblytinytales.com/test.txt')
            .then(response => response.text())
            .then(res => {

                const arr = res.split(' ');

                const countObj = arr.reduce((acc, curr) => {
                    acc[curr] ? acc[curr]++ : acc[curr] = 1;
                    return acc;
                }, {});

                var sorted = Object.entries(countObj).map(([word, count]) => ({ word, count })).sort((a, b) => b.count - a.count);


                sorted = sorted.slice(0, 20);
                setResult(sorted)

                console.log(sorted);
            });


    }, [])

    const exportToCsv = () => {

        const csvRows = [];
        csvRows.push(headers.map(header => header.label).join(',')); 
        csvRows.push(...result.map(row => `${row.word},${row.count}`));
        const csvString = csvRows.join('\n');


        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        setFileSize(blob.size);
    };




    return (
        <div style={{ width: "80vw", height: "65vh", justifyContent: "center" }} className='neo'>

            <span className="heading" style={{ marginTop: "12rem" }}>Top 20 most occuring Words!!</span>
            <ResponsiveContainer>
                <BarChart className="bar"
                    width={1300}
                    height={400}
                    data={result}
                    margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                    barCategoryGap={0}
                >
                    <XAxis dataKey="word" padding={{ left: 10, right: 10 }} scale="auto" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="0 3" />
                    <Bar dataKey="count" fill="#8b5cf6" background={{ fill: "#282c34" }}/>

                    
                </BarChart>
            </ResponsiveContainer>


            <div className='justify-center flex' >
                <div className='button px-8' data-tooltip={`size: ${fileSize}`} >
                    <button className='button-wrapper' onClick={exportToCsv}>
                        <div className='text'>Download</div>
                        <span className='icon'>
                            <img src={download} alt="download-button" className='icon-svg' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Graph
