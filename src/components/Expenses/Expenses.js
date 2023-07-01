import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  console.log(props.expenses);
  const [year, setYear] = useState("2020");

  const onYearChange = (yearValue) => {
    console.log(yearValue);
    setYear(yearValue);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

  
  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter selectedYear={year} onYearChange={onYearChange} />
      </div>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
