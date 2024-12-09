import React from "react";
import "../CSS/music.css";

class Music extends React.Component {

    render() {
        const { musicItems, active } = this.props
        return (
            <div className="music">
                <ul>
                    <h3>Music</h3>
                    {musicItems.map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Music;