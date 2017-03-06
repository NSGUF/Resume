import React from 'react';
import ExpeItem from "./ExpeItem";
export default class Experience extends React.Component {
    render() {
        let items=[];
        if(this.props.items.length!=0){
            let len=this.props.items.length;
            this.props.items.forEach(
                item=>{
                    items.push(<ExpeItem item={item}/>);
                    if(len>1)
                        items.push(<hr/>);
                    len--;
                }
            );
        }
        return (
        <div className="company">
            <h3 className="clr2">项目经验</h3>
            {items}
        </div>
        );
    }
}