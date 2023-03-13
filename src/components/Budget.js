import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { expenses } = useContext(AppContext);
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleBudgetBlur = () => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (budget < totalExpenses) {
      alert('You cannot reduce budget value lower than the spending');
      setBudget(totalExpenses);
    }
    if(budget > 20000) {
        alert("Budget cannot be higher than 20000");
        setBudget(totalExpenses);
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: £{' '}
        <input
          required='required'
          type='number'
          id='cost'
          value={budget}
          style={{ marginLeft: '2rem', size: 10 }}
          onChange={handleBudgetChange}
          onBlur={handleBudgetBlur}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
