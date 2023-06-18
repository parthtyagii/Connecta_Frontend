import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import ConferencePage from './Components/ConferencePage/ConferencePage';



function App() {
    return (
        <div className="w-auto flex justify-center items-center">
            {/* <Homepage /> */}
            <ConferencePage />
        </div>
    )
};

export default App;