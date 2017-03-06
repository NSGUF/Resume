import React from 'react';
export default class InfoDetail extends React.Component {
    render() {
        return (
            <li>{this.props.item.itemValue}</li>
        );
    }
}