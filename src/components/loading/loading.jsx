import React from 'react';
import "./loading.css"


class Loading extends React.Component{    
    state = {};
    
    render(){
        return <div className="loading">
                    <div className="loadingBounce1"></div>
                    <div className="loadingBounce2"></div>
                    <div className="loadingBounce3"></div>
                </div>

    }
}   

export default Loading;
