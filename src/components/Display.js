import { Component } from "react";
import "../CSS/display.css"

import LockScreen from "./LockScreen";
import Navbar from "./Navbar";
import Playing from "./Playing";
import WheelColor from "./WheelColor";
import Wallpaper from "./Wallpaper";
import Menu from "./Menu"
import Music from "./Music";
import Game from "./Game";
import Setting from "./Setting";
import Theme from "./Theme";
import Song from "./Song"
class Display extends Component {

    render() {
        const { active, currentMenu, menuItems, musicItems, songItemsName, playing, songIndex, audio, songUrl, songImgUrls, wallpaper, wallpaperItems, noty, setNoty, notifyText } = this.props;
        return (
            <div className="display" style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }}>
                <Navbar noty={noty} notifyText={notifyText} setNoty={setNoty} />

                {currentMenu === -2 && <LockScreen wallpaper={wallpaper} />}
                {currentMenu === -1 && <Menu songImgUrl={songImgUrls} menuItems={menuItems} active={active} />}
                {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
                {currentMenu === 2 && <Game />}
                {currentMenu === 3 && <Setting active={active} />}
                {currentMenu === 4 && <Song musicItems={musicItems} songItemsName={songItemsName} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1 className="empty-text">Artist</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1 className="empty-text">Albums</h1></div>}
                {(currentMenu === 0 || currentMenu === 7) && <Playing songImgUrls={songImgUrls} audio={audio} songUrl={songUrl} playing={playing}
                    songIndex={songIndex} musicItems={musicItems} songItemsName={songItemsName} />}
                {currentMenu === 8 && <Theme active={active} />}
                {currentMenu === 9 && <WheelColor active={active} />}
                {currentMenu === 10 && <Wallpaper active={active} />}
            </div>
        )
    }
}
export default Display;