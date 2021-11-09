import React from 'react';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Header/components/menu/menu';
import style from './style.module.scss';

class App extends React.Component {
    render() {
        return (
            <div className = {style.container}>
            <Header/>
            <Content/>
            <Footer/>
            </div>
        )
    }
}

export default App;