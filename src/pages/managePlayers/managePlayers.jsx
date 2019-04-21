import React from 'react';
import "./managerPlayers.css"

import PlayerInfo from "../../components/playerInfo/playerInfo";
import Loading from "../../components/loading/loading";

class ManagerPlayers extends React.Component{    
    state = {
        players: {
            player1: {isValid: false},
            player2: {isValid: false},
        },
        showError: false,
        saving: false
    };
    
    onChange = (imputInfo) => {
        this.setState((state) => ({players: Object.assign(state.players, imputInfo), 
                                    showError: false}));
    }
    
    sendPlayers = () => {
        if(this.checkPlayers(Object.entries(this.state.players))){
            console.log("Done")
            this.setState({saving: true})
            this.props.onChangePage(2);
        }else{
            this.setState({showError: true})
        }
        
    }
    
    checkPlayers = (players) => {
        return players.every(([name, {isValid}]) => isValid);
    }   

    render(){
        console.log(this.state.players)
        const {showError, saving} = this.state;
        return <div className="ManagerPlayers">
                    <h1>Enter Player's Names</h1>

                    <PlayerInfo name="Player 1" id="player1" onChange={this.onChange}/>
                    <PlayerInfo name="Player 2" id="player2" onChange={this.onChange}/>

                    {!saving && 
                        <button className="button" type="button" onClick={this.sendPlayers}>Start</button>}
                    
                    {showError && 
                        <span className="error">Enter all the users</span>}
                    
                    {saving &&  <Loading/>}
                </div>

    }
}   

export default ManagerPlayers;