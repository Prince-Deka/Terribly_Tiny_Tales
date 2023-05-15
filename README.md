# Prince Kr Deka

## Registration Number: 12006624

![lpu](https://github.com/Prince-Deka/Terribly_Tiny_Tales/assets/73701430/33bb6c72-f414-4405-b2b7-391828c2c40d)

### Submitted To:

## Terribly Tiny Tales

# Deployed Link: https://prince-terriblytinytales.netlify.app/

# Libraries used in the project:

## Recharts
Recharts is a popular open-source library for building responsive and customizable charts in React web applications. With a wide range of chart types, including line, bar, area, pie, scatter, and more, Recharts offers a simple and intuitive API for data visualization. It also provides features such as animation, tooltip, legend, and responsive design out of the box. Recharts is highly customizable, allowing developers to style and configure every aspect of the chart to fit their needs. Its popularity and active community make it a reliable choice for data visualization needs in React projects.

## Tailwind CSS
Tailwind CSS is a popular utility-first CSS framework that makes it easy to build modern, responsive, and customizable user interfaces. Instead of providing pre-built components, Tailwind CSS offers a set of low-level utility classes that can be combined to create any design or layout. This approach allows for flexibility and rapid prototyping, as well as reducing the amount of custom CSS required. Tailwind CSS also provides a suite of plugins, themes, and tools to streamline development. Its popularity and active community make it a reliable choice for modern web development projects.

# `Graph.js`
```
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
```    
 



This code takes a string of text, splits it into an array of words using the split method, and then uses the reduce method to count the occurrences of each word. The resulting object is then transformed into an array of objects with the word and its count using the map method. This array is sorted in descending order based on the count using the sort method. The top 20 most frequent words are then saved in the result state variable using the setResult function. Finally, the sorted array is logged to the console using console.log.



```
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
    };
```


This is a JavaScript function that exports data to a CSV file and updates the state with the file size. The function takes no arguments and operates on state variables defined outside the function.

The function starts by creating an empty array csvRows that will contain the rows of the CSV file. headers is an array of column headers for the CSV file. The function adds the headers to the csvRows array by mapping the label property of each header and joining them with commas.

The function then adds the data to the csvRows array by mapping the result array to a string with the word and its count separated by commas. The resulting rows are then appended to the csvRows array using the spread operator.

The csvRows array is then joined into a single CSV string with each row separated by a newline character.

The CSV string is then converted to a Blob object with the MIME type text/csv;charset=utf-8;.

A download link for the file is created by creating an anchor element link and setting its href attribute to a URL created from the Blob object. The download attribute is set to the file name, and the anchor element is appended to the document body. The click method is then called on the anchor element to initiate the download. Finally, the anchor element is removed from the document body.

```
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
```

This code is a React component that renders a bar chart of the top 20 most occurring words and a download button for the CSV file. The component uses the ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, and Bar components from the recharts library for rendering the bar chart.

The data prop of the BarChart component is set to the result array, which contains the top 20 most occurring words and their counts. The XAxis component renders the word labels, and the YAxis component renders the count values. The Bar component is used to render the bars of the chart.

The component also includes a download button that calls the exportToCsv function when clicked. The fileSize state variable is used to display the file size as a tooltip on the button.

Overall, this component provides a simple and interactive way for users to visualize and download the top 20 most occurring words from a text file.

# `App.js`

```
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Graph from './component/Graph/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/graph' element={<Graph />}></Route>
        </Routes>
      </header>
      <footer style={{color:""}} className='footer'>
        &copy; 2023 Prince. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
```



This is a simple React application that uses the react-router-dom library to define routes for different components. The App function is the root component of the application and returns a JSX template that includes a header, footer, and the Routes component.

The Routes component defines two routes: / and /graph. The Home component is rendered when the / route is matched, and the Graph component is rendered when the /graph route is matched. The element prop of the Route component is used to specify the component to render when the route is matched.

The header of the application is empty and does not contain any content. The footer includes a copyright notice with the current year and the name of the author.

Overall, this code sets up the basic structure of a React application with routing and provides a starting point for building more complex applications.

# Complete Code

# `App.js`

```
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Graph from './component/Graph/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/graph' element={<Graph />}></Route>
        </Routes>
      </header>
      <footer style={{color:""}} className='footer'>
        &copy; 2023 Prince. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
```

# `Graph.js`

```
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
```


# Output

![image](https://github.com/Prince-Deka/Terribly_Tiny_Tales/assets/73701430/23b9d736-5695-4964-873f-037918254150)

![image](https://github.com/Prince-Deka/Terribly_Tiny_Tales/assets/73701430/3bf168af-1de8-4d60-9b53-f42b07bca74f)

![image](https://github.com/Prince-Deka/Terribly_Tiny_Tales/assets/73701430/ee1b6c24-33ea-403f-b458-c22a7f5dd1c8)

