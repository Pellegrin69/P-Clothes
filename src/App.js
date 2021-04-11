import React from 'react'
import './App.css';
import './ListeArticles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListeArticles from "./components/ListeArticles";


function App() {

    return (
        <div className="App">
            <Header/>
            <ListeArticles/>
            <Footer/>
        </div>
    );
}

export default App;
