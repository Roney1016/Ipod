import React from "react";
import "../CSS/wheelColor.css"

class WheelColor extends React.Component {

    render() {
        const { active } = this.props;
        return (
            <div className="wheel-color">
                <ul>
                    <h3>Wheel Color Select</h3>
                    {["Black", "White", "Brown"].map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default WheelColor;