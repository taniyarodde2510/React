import logo from './logo.svg';
import './App.css';
import Student  from './Student';
import User from './User';
function App() {
  return (
    <div className="App">
      <Student />
      
      <User name="Taniya" lastname="Rodde" email="roddetaniya@gmail.com" number="7620183695"/>
      <User name="Happy" lastname="Rodde" email="roddetaniya@gmail.com" number="7620183695"/>
    </div>
  );
}

export default App;
