import { Component } from "react";

import Display from "./Display";
import Wheel from "./wheel";

class Ipod extends Component {

    render() {
        const { active, menuItems, musicItems, musicUrl, songImgUrls, songItemsName, wallpaperItems, wallpaper,
            songIndex, songUrl, songImg, playing, currentMenu, theme, wheelColor, audio, noty, notifyText,
            seekSongForward, seekSongReverse, togglePlayPause, updateActiveMenu,
            changeMenuBackward, changeMenuForward, setNoty } = this.props;
        return (
            <div id="ipod-container" style={{ backgroundColor: theme }}>
                <Display songIndex={songIndex} playing={playing} active={active} menuItems={menuItems} currentMenu={currentMenu}
                    musicItems={musicItems} audio={audio} songUrl={songUrl} songImgUrls={songImgUrls} wallpaper={wallpaper}
                    wallpaperItems={wallpaperItems} noty={noty} notifyText={notifyText} songImg={songImg} songItemsName={songItemsName} musicUrl={musicUrl} setNoty={setNoty} />

                <Wheel theme={theme} active={active} menuItems={menuItems} currentMenu={currentMenu} changeMenuBackward={changeMenuBackward}
                    changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause}
                    seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor} />
            </div >
        )
    }
}

export default Ipod;