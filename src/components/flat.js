import React from "react";
import "./flat.css";

// NOTE: VIDEO STOPPED AT 58:52

class Flat extends React.Component {
    render() {
        // this.props.flat.name
        // console.log(this.props.flat.name);

        const title = this.props.flat.price 
            + this.props.flat.priceCurrency 
            + " - " + this.props.flat.name;
        // backgroundImage replace css background-image
        // ` back tick
        const style = {
            backgroundImage: `url('${this.props.flat.imageUrl}')`
        };


        return (
            // JSX className is the same as HTML class
            <div className="flat"> 
                <div className="flat-picture" style={style}></div>
                <div className="flat-title">
                    {title}
                </div>
            </div>
        );
    }
}

export default Flat;