import './App.css';
import { Outlet, Link, NavLink} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import { getData } from './constants/data_1';


function App() {

  // let getData = getData();


  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <Navbar /> */}
      <nav style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}>
        <Link to='invoices'>Invoices</Link>
        <Link to='expenses'>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
