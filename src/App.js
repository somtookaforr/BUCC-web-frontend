import Index from './Pages/index'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import your individual pages here

function App() {
  return (
    <Router>
    <div className="App">
      {/* Call them here */}
      <Switch>
        <Route exact path="/" component={Index}/> 
      </Switch>
    </div>
    </Router>

  );
}

export default App;
