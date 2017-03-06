import React from "react";
import InfoDetail from "./InfoDetail";
export default class InfoAndEvalu extends React.Component{
    render(){
        let items=[];
        if(this.props.items.length!=0){
            this.props.items.forEach(
                item=>{
                    items.push(<InfoDetail item={item}/>);
                }
            );
        }
        return (
            <div className="company">
                <h3 className={this.props.className}>{this.props.infoMation}</h3>
                <div className="company_details">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}