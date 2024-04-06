import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Navigation from './Navigation';
import HeroSection from './Hero';
import './ToggleShow.css';

const ToggleShow = () => {
    const rows = [
        { id: 5672, name: "Uthai", age: 87 },
        { id: 5673, name: "Milin", age: 89.8 },
        { id: 5674, name: "Namfon", age:65.1 },
    ];

    // const [isContentVisible, setIsContentVisible] = useState(false);
    const [isContentVisibleA, setIsContentVisibleA] = useState(false);
    const [isContentVisibleB, setIsContentVisibleB] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [chartData, setChartData] = useState(null);

    const chartContainer = useRef(null);

    useEffect(() => {
        let chartInstance = null;
    
        if (chartData) {
            const ctx = chartContainer.current.getContext('2d');
    
            if (chartInstance) {
                chartInstance.destroy(); // Destroy previous chart instance
            }
    
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
                onClick: function(evt) {
                    const activeElements = this.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
                    if (activeElements.length > 0) {
                        // Handle click on the bar chart
                        const clickedElement = activeElements[0];
                        const datasetIndex = clickedElement.datasetIndex;
                        const index = clickedElement.index;
                        const value = this.data.datasets[datasetIndex].data[index];
                        
                        // Example: Show a popup with the value
                        alert(`You clicked on bar ${index} with value ${value}`);
                    }
                }
            });
        }
    
        return () => {
            if (chartInstance) {
                chartInstance.destroy(); // Cleanup on component unmount
            }
        };
    }, [chartData]);

    const toggleContentVisibleA = () => {
        setIsContentVisibleA(!isContentVisibleA);
        setIsContentVisibleB(false)
    }

    const toggleContentVisibleB = () => {
        setIsContentVisibleB(!isContentVisibleB);
        setIsContentVisibleA(false)
    }

    // toggle checked anywhere on row 
    const handleRowClick = (id) => {
        const currentIndex = checkedItems.indexOf(id);
        const newCheckedItems = [...checkedItems];
    
        if (currentIndex === -1) {
          newCheckedItems.push(id);
        } else {
          newCheckedItems.splice(currentIndex, 1);
        }
    
        setCheckedItems(newCheckedItems);
      };

    const handleCheckboxChange = (id) => {
        // current ID if = -1 mean not checked , if = 1 mean checked already
        const currentIndex = checkedItems.indexOf(id);
        const newCheckedItems = [...checkedItems];

        console.log("currentIndex : ", currentIndex);
        console.log("id : ", id);

        if (currentIndex === -1) {
            newCheckedItems.push(id);
            console.log("Push NewCheckedItems: ", newCheckedItems);
        } else {
            newCheckedItems.splice(currentIndex, 1)
            console.log("Splice NewCheckedItems: ", newCheckedItems);
        }

        setCheckedItems(newCheckedItems);
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        const selectedData = rows.filter((item) => checkedItems.includes(item.id));
        console.log("Selected items : ", selectedData);

        // Prepare data for the chart
        const ageData = selectedData.map((item) => item.age);
        const labels = selectedData.map((item) => item.name);
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Age',
                    data: ageData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        });
    }


  return (
    <div>

        <button onClick={toggleContentVisibleA}>
            {/* {isContentVisible ? 'Hide content' : 'ShoW content'} */}
            Show content A
        </button>
        <button onClick={toggleContentVisibleB}>
            Show content B
        </button>
        {isContentVisibleA && (
            <div>
                <h1>Main Content A</h1>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis aliquam impedit cumque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni eius officiis alias? Harum itaque impedit asperiores, voluptatem pariatur aliquid? Facilis soluta corporis eius exercitationem? Minus earum fuga veritatis explicabo?</p>
                <hr /> */}
                <Navigation />
                <form action="" onSubmit={handleSubmit}>
                    <table style={{border: '1px solid black'}}>
                        <thead>
                            <tr style={{border: '1px solid black'}}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((row) => {
                                    return (
                                        <tr key={row.id} className='table-row' onClick={() => handleRowClick(row.id)}>   
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>
                                                <input 
                                                type="checkbox" 
                                                name={`checkbox${row.id}`} 
                                                id={`checkbox${row.id}`}
                                                checked={checkedItems.includes(row.id)}
                                                onChange={() => handleCheckboxChange(row.id)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button>Submit</button>
                </form>

                <div>
                    <canvas ref={chartContainer} width="400" height="200"></canvas>
                </div>
            </div>
        )}

        {isContentVisibleB && (
            <div>
                <h1>Main Content B</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis aliquam impedit cumque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni eius officiis alias? Harum itaque impedit asperiores, voluptatem pariatur aliquid? Facilis soluta corporis eius exercitationem? Minus earum fuga veritatis explicabo?</p>
                <p>Lorem ipsum dolor sit.</p>
                <HeroSection />
                <hr />
            </div>
        )}

    </div>
  )
}

export default ToggleShow