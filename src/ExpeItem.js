import React from 'react';
export default class ExpeItem extends React.Component {
    render() {
        return (
            <div className="skill_info ">
                <h4>{this.props.item.title}</h4>
                <h4>项目描述：</h4>
                <p>{this.props.item.descript}</p>
                <h4>项目职责：</h4>
                <p>{this.props.item.control}</p>
            </div>
        );
    }
}