import React from 'react';
import "./playerInfo.css"

class PlayerInfo extends React.Component{    
    state = {};
    
    onChange = (e) => {
        const {id, onChange} = this.props
        const value = e.target.value
        const isValid = value !== "";

        onChange({[id]: {value, isValid}});
    } 

    render(){
        const {name, id} = this.props;

        return <div className="playerInfo">
                    <label form={name}>{name}: </label>
                    <input id={id} type="text" onChange={this.onChange}/>
                </div>

    }
}

export default PlayerInfo;