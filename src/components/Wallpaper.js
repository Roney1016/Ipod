import React from "react";
import "../CSS/wallpaper.css"
class Wallpaper extends React.Component {

    render() {
        const { active } = this.props;
        return (
            <div className="wallpaper">
                <h2>Wallpaper Select</h2>
                <ul>
                    {["wallpaper1", "wallpaper2", "wallpaper3"].map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Wallpaper;

