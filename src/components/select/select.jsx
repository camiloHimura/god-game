import React from 'react';
import "./select.css"

class Select extends React.Component{
    static Option = props => <button onMouseDown={e => props.optionSelected(props)}>{props.children}</button> 
    
    state = {};
    
    showOptions = () => {
        this.container.classList.add("showOptions")
    }
    
    hideOptions = () => {
        this.container.classList.remove("showOptions")
    }

    toggleOptions = event => {
        event.preventDefault();
        event.stopPropagation();
        this.container.classList.toggle("showOptions")
    }
    
    optionSelected = ({value, children, onChange}) => {
        if(!value){ value = children }
        
        this.setState({value}, () => onChange(this.state.value))
    }
    
    render(){
        let { defaultName = "Select", onChange , style} = this.props;
        let { value = defaultName } = this.state;
        
        return <div className="select" onBlur={this.hideOptions} onClick={this.showOptions} style={style}>
                    <button onClick={this.toggleOptions}>{value}</button>
                    <div className="contOptions" ref={div => this.container = div}>
                        {React.Children.map(this.props.children, child => React.cloneElement(child, 
                                                                                            {optionSelected: this.optionSelected, onChange}))}
                    </div>
                </div>
    }
}

export default Select;