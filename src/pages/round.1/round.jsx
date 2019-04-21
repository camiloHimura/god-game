import React from 'react';
import "./round.css"

import Select from "../../components/select/select";
import Score from "../../components/score/score";

class Round extends React.Component{    
    state = {};
    
    render(){
        console.log(this.state.players)
        const {name} = this.props;
        return <section className="round">
                    <h1>Round 1:  <span>Player Name</span></h1>

                    <div className="container">

                        <div className="contMoves">
                            <div className="moves">
                                <span>Select Move: </span>
                                <Select style={{"maxWidth": "128px"}} onChange={value => console.log("option Selected", value)}>
                                    <Select.Option value="Paper">Paper</Select.Option>
                                    <Select.Option value="Rock">Rock</Select.Option>
                                    <Select.Option value="Scissor">Scissor</Select.Option>
                                </Select>    
                            </div>

                            <button className="button" type="button">Ok</button>
                        </div>

                        <div className="contScore">
                            <Score />
                        </div>
                    </div>
                
                </section>

    }
}   

export default Round;