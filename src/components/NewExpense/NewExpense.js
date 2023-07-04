import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const newExpenseFormToggleHandler = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
    <div className='new-expense'>
        {showForm === true ? <ExpenseForm formToggleHandler={newExpenseFormToggleHandler} onSavingExpenseData={saveExpenseDataHandler}/> : <div className="new-expense__actions" id='add-new-expense-btn' style={{textAlign:'center'}}>
        <button type="submit" onClick={newExpenseFormToggleHandler}>Add New Expense</button>
      </div>}
    </div>);
}

export default NewExpense;