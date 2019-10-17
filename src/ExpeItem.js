import React from 'react';
export default class ExpeItem extends React.Component {
    render() {
        return (
            <div className="skill_info ">
                <h2>{this.props.item.title}</h2>
                <h4>项目描述：</h4>
                <p>{this.props.item.descript}</p>
                <h4>项目技术：</h4>
                <p dangerouslySetInnerHTML={{__html: this.props.item.control}}/>
            </div>
        );
    }
}