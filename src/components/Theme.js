import React from "react";
import "../CSS/theme.css"
class Theme extends React.Component {

    render() {
        const { active } = this.props;
        return (
            <div className="theme">
                <ul>
                    <h3>Theme</h3>
                    {["Snow White", "Pearl", "USC GOLD", "Space Gray", "Black"].map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Theme;