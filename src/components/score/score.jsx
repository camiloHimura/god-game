import React from 'react';
import "./score.css"

class Score extends React.Component{    
    state = {
        rounds: [
            {num: 1, winner: "camilo"},
            {num: 1, winner: "camilo"},
            {num: 1, winner: "camilo"},
            {num: 1, winner: "camilo"}
        ]
    };
    
    render(){
        const {rounds} = this.state;

        return <section className="score">
                    <h2>Score</h2>

                    <div className="cont">
                        <div className="row">
                            <div>Round</div> <div>Winner</div>
                        </div>
                        {rounds.map(round => 
                            <div className="row">
                                <div>{round.num}</div> <div>{round.winner}</div>
                            </div>
                        )}
                    </div>
                </section>

    }
}   

export default Score;