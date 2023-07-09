import Title from './Title';
import Table from './Table';
import ViewMarks from './ViewMarks';
import Modal from './Modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          <Route path="/ViewMarks/:id">
            <ViewMarks />
          </Route> 
          <Route path="/Modal">
            <Modal />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;