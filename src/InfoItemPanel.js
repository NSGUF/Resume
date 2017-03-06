import React from "react";
import InfoItem from "./InfoItem";

export default class InfoItemPanel extends React.Component{
    render(){
        let items=[];
        if(this.props.items.length!=0){
            this.props.items.forEach(
                item=>{
                    items.push(<InfoItem item={item}/>);
                }
            );
        }
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="sidebar_top">
                    <h1>方智峰</h1>
                    <img src="public/images/avt.png" alt="头像"/>
                </div>
                <div className="details">
                    {items}
                </div>
                <div class="clearfix"></div>
            </div>
        );
    }
}