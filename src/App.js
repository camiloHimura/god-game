import React, { Component } from 'react';
import './App.css';
import ManagerPlayers from "./pages/managePlayers/managePlayers"
import Round from "./pages/round/round"

class App extends Component {
    state = {
        currentPage: 2,
        users: [{id: 1, name: "camilo"},
                {id: 2, name: "cristian"}]
    }

    onChangePage = (numberPage) => {
        this.setState({currentPage: numberPage})
    }

    render() {
        const {currentPage} = this.state;
        
        return (
            <div className="App generalContainer">
                
                {currentPage === 1 && <ManagerPlayers onChangePage={this.onChangePage}/>}
              
                {currentPage === 2 && <Round onChangePage={this.onChangePage}/>}

            </div>
        )
    }
}

export default App;
