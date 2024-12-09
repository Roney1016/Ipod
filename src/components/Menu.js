import React from "react";

import "../CSS/menu.css"

import nowPlaying from "../static/menuImg/nowPlaying.jpg";
import game from "../static/menuImg/game.jpg";
import setting from "../static/menuImg/settings.png";
import music from "../static/menuImg/music.jpg"


class Menu extends React.Component {

    render() {
        const { menuItems, songImgUrl, active } = this.props;// destrucing props
        return (
            <div className="menu-constrainer">
                <div className="menu" >
                    <ul>
                        {menuItems.map((element, index) => {
                            return active === index ? <li key={index} className="active">&nbsp;{element}&nbsp;</li> : <li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>

                <div className="leaf">
                    {active === 0 && <img src={nowPlaying} className="leaf-img" alt="play" />}
                    {active === 1 && <img src={music} className="leaf-img" alt="Music" />}
                    {active === 2 && <img src={game} className="leaf-img" alt="Game" />}
                    {active === 3 && <img src={setting} className="leaf-img" alt="Setting" />}
                </div>
            </div>
        )
    }
}

export default Menu;

