import './App.css';
import Home from './components/Header';
import About from './components/About';
import AddTransaction  from './components/AddTransaction';
import BalanceSystem from './components/BalanceSummary';
function App() {
  return (
    <div ClassName="App">
      <Home></Home>
      <About></About>
      <AddTransaction></AddTransaction>
      <BalanceSystem/>
    </div>
  );
}

export default App;
