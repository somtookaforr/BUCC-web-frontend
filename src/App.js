import Index from "./Pages/index";
import Events from "./Pages/Events";
import Contact  from "./Pages/Contact";
import ProgramsPage from './Pages/ProgramsPage'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import your individual pages here

function App() {
  return (
    <Router>
      <div className="App">
        {/* Call them here */}
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/programs" component={ProgramsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
