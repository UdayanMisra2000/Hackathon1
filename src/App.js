import './App.css';
import Body from './Components/body';
import Features from './Components/feature';
import Gallery from './Components/Gallery';
import Nav from './Components/navbar';
import Contact from './Components/contact';
import About from './Components/About';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
