import React from "react";
import "../CSS/song.css"
class Song extends React.Component {

    render() {
        const { songItemsName, active } = this.props;
        return (
            <div className="song">
                <ul>
                    <h3>Songs</h3>
                    {songItemsName.map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Song;