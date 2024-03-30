import React, { useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './Hero';
import './ToggleShow.css';

const ToggleShow = () => {
    // const [isContentVisible, setIsContentVisible] = useState(false);
    const [isContentVisibleA, setIsContentVisibleA] = useState(false);
    const [isContentVisibleB, setIsContentVisibleB] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const toggleContentVisibleA = () => {
        setIsContentVisibleA(!isContentVisibleA);
        setIsContentVisibleB(false)
    }

    const toggleContentVisibleB = () => {
        setIsContentVisibleB(!isContentVisibleB);
        setIsContentVisibleA(false)
    }

    const handleRowCheckbox = (id, e) => {
        const checkbox = document.getElementById(`checkbox${id}`);
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            e.stopPropagation(); // Stop event propagation
        }

        const isChecked = checkedItems.includes(id);
        if (isChecked) {
            setCheckedItems(checkedItems.filter((item) => item != id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Checked Item:', checkedItems);
    }

    const rows = [
        { id: 5672, name: "Uthai" },
        { id: 5673, name: "Milin" },
        { id: 5674, name: "Namfon" },
    ];

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
                                        <tr key={row.id} className='table-row' onClick={(e) => {handleRowCheckbox(row.id, e); }}>   
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>
                                                <input type="checkbox" name={`checkbox${row.id}`} id={`checkbox${row.id}`} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr className='table-row' onClick={handleRowCheckbox}>
                                <td>5672</td>
                                <td>Uthai</td>
                                <td>
                                    <input type="checkbox" name="" id="checkboxA" />
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                    <button>Submit</button>
                </form>
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