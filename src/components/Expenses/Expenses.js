import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const onYearChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    ); 
}

export default Expenses;