import React from 'react';
export default class InfoItem extends React.Component{
    render(){
        return (<div>
            <h3>{this.props.item.itemKey}</h3>
            <p>{this.props.item.itemValue}</p>
        </div>);
    }
}