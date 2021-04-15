import React from 'react'
import './App.css';
import './ListeArticles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListeArticles from "./components/ListeArticles";
import Navigation from "./components/Navigation";
import MontreFavoris from "./components/MontreFavoris";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {

    return (
        <div className="App">
            <Header/>

            <Router>
                <Navigation/>
                <Route path="/" exact component={ListeArticles}/>
                <Route path="/MontreFavoris" exact component={MontreFavoris}/>
                <Route path="/Contact" exact component={Contact}/>

            </Router>
            <Footer/>
        </div>
    );
}

export default App;
