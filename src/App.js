import Index from "./Pages/index";
import Events from "./Pages/Events";
import Contact  from "./Pages/Contact";
import ProgramsPage from './Pages/ProgramsPage'
import About from "./Pages/About";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/programs" component={ProgramsPage} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
