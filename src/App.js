import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Curriculum from './pages/Curriculum/Curriculum';
import Usa from './pages/Usa/Usa';
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import './App.css';
import Opportunity from './pages/Opportunity/Opportunity';


function App() {
  
  return (
  <>
       <Router>
       <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/opportunity" component={Opportunity} />
          <Route path="/usa" component={Usa} />
          <Route path="/contact" component={Contact} />
          <Route path="/curriculum" component={Curriculum} />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
</>
  );
}

export default App;
