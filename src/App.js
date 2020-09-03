
import React from 'react';
import NavigationBar from './navigation';
import Posts from './posts';
import ContactForm from './contact';

import './App.css';

function App() {

    return (
        <div className="App">
            <NavigationBar />
            <Posts />
            <ContactForm />
        </div >
    );
}

export default App;