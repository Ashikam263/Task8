import Title from './Title';
import Table from './Table';
import ViewMarks from './ViewMarks';
import MyModal from './MyModal';
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
            <MyModal />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;