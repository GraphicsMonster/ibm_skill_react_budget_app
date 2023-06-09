import React from 'react';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under

import Remaining from "./components/Remaining.js"
import ExpenseTotal from "./components/ExpenseTotal.js"
import ExpenseList from "./components/ExpenseList.js"
import ExpenseItem from "./components/ExpenseItem.js"


import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    <div className='budget-row'>

                        {/* Add Budget component here under */}   
                         <Budget />     

                        {/* Add Remaining component here under */}  
                         <Remaining />      

                        {/* Add ExpenseTotal component here under */} 
                         <ExpenseTotal />
                         
                    </div>

                       
                        {/* Add ExpenseList component here under */}  
                         <ExpenseList />       

                        {/* Add ExpenseItem component here under */}        
                         <ExpenseItem />

                        {/* Add AllocationForm component here under */} 
                         <AllocationForm />       

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
