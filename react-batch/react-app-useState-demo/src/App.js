import logo from './logo.svg';
import './App.css';
import StatelessForm from './components/StatelessForm';
import StatefullForm from './components/StatefullForm';
import StatelessCounterApp from './components/StatelessCounterApp';
import StatefullCounterApp from './components/StatefullCounterApp';
import ToogleList from './components/ToogleList';
import StatelessUserList from './components/StatelessUserList';
import StatefullUserList from './components/StatefullUserList';

function App() {
  return (
    <div className="App">
      {/* <StatelessForm></StatelessForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <StatelessCounterApp></StatelessCounterApp> */}
      {/* <StatefullCounterApp></StatefullCounterApp> */}
      {/* <ToogleList></ToogleList> */}
      {/* <StatelessUserList></StatelessUserList> */}
      <StatefullUserList></StatefullUserList>
    </div>
  );
}

export default App;
