import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const onYearChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />
        ));
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    ); 
}

export default Expenses;