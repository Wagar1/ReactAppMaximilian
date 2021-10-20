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

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler} />
                {
                    props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear).map(expense => (
                        <ExpenseItem 
                            key = {expense.id}
                            title = {expense.title}
                            amount = {expense.amount}
                            date = {expense.date}
                        />
                    ))
                }
            </Card>
        </div>
    ); 
}

export default Expenses;