import './App.css';
import AddTransaction from './ExpenseComponent/AddTransaction';
import Balance from './ExpenseComponent/Balance';
import Header from './ExpenseComponent/Header';
import IncomeExpenses from './ExpenseComponent/IncomeExpenses';
import TransactionList from './ExpenseComponent/TransactionList';
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
