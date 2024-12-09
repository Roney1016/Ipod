import { Component } from "react";
import Ipod from "./components/Ipod";

import song1 from "./static/songs/Jo Tum Mere Ho.mp3"
import song2 from "./static/songs/Lovely.mp3";
import song3 from "./static/songs/Criminal.mp3";
import song4 from "./static/songs/HUSN.mp3";
import song5 from "./static/songs/Perfect.mp3"

import songImg1 from "./static/songs/songImg/JoTumMereHo.jpg";
import songImg2 from "./static/songs/songImg/lovely.jpg";
import songImg3 from "./static/songs/songImg/criminal.jpg";
import songImg4 from "./static/songs/songImg/husn.jpg";
import songImg5 from "./static/songs/songImg/perfect.jpg";

import wallpaper from "./static/wallpaper1.jpg";
import wallpaper1 from "./static/wallpaper2.jpg";
import wallpaper2 from "./static/wallpaper3.jpg";



class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,  // active list items
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      musicItems: ["All Songs", "Artist", "Albums"],

      musicUrl: [song1, song2, song3, song4, song5],
      songImgUrls: [songImg1, songImg2, songImg3, songImg4, songImg5],
      songItemsName: ["Jo Tum Mere Ho", "Lovely", "Criminal", "HUSN", "Perfect"],
      wallpaperItems: [wallpaper, wallpaper1, wallpaper2],
      wallpaper: wallpaper,   // current wallpaper

      lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 2, 10: 2 },  //length of a particular menu
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, //which menu can be rendered by key menu

      songIndex: 0, // current song index
      songUrl: song1, // current song url
      songImg: songImg1,  // current song Img
      playing: false,
      currentMenu: -2,
      theme: "rgb(210,210,201)",
      wheelColor: "rgb(255,255,255)",    // current them and wheel color
      audio: new Audio(song1), // current audio file
      noty: false,
      notifyText: "",
      navigationStack: [],// Used for navigation forward and backward current body theme


    }
  }

  // function for:- on long press fo forward button tracks are seeked forward
  seekSongForward = (e) => {
    if (this.state.currentMenu === -2) {
      return;  // it's mean lockScreen
    }
    if (this.state.playing === false) {
      return;
    }

    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.musicUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }
      const songUrl = this.state.musicUrl[songIndex];
      const songImg = this.state.songImgUrls[songIndex];
      this.setState({
        songIndex,
        songImg,
        songUrl,
        audio: new Audio(songUrl)
      }, () => {
        this.state.audio.play();
      })
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      })
    }
  }

  // function for:- on long press fo forward button tracks are seeked reverse
  seekSongReverse = (e) => {
    if (this.state.currentMenu === -2) {
      return;  // it's mean lockScreen
    }
    if (this.state.playing === false) {
      return;
    }

    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === 0) {
        songIndex = this.state.musicUrl.length - 1;
      } else {
        songIndex--;
      }
      const songUrl = this.state.musicUrl[songIndex];
      const songImg = this.state.songImgUrls[songIndex];
      this.setState({
        songIndex,
        songImg,
        songUrl,
        audio: new Audio(songUrl)
      }, () => {
        this.state.audio.play();
      })
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      })
    }
  }

  // function for: toggle song play and pause
  togglePlayPause = () => {
    if (this.state.currentMenu === -2) {
      return;
    }
    if (this.state.playing === true) {
      this.setState({ playing: false })
      this.state.audio.pause();
    } else {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  }

  // function for:- update active menu while rotating on the track - wheel
  updateActiveMenu = (direction, menu) => {
    if (menu !== -1 && menu !== 1 && menu !== 4 && menu !== 8 && menu !== 9 && menu !== 10 && menu !== 3) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min })
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max })
      } else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }

  // FUNCTION FOR : CHANGE THE THEME OF iPod BODY
  setTheme = (id) => {
    let theme = "";
    if (id === 0) {
      theme = "#FDDCD7";
    }
    else if (id === 1) {
      theme = "rgb(210, 210, 210)"
    } else if (id === 2) {
      theme = "#F5DDC5";
    } else if (id === 3) {
      theme = "#D1CDDA";

    } else if (id === 4) {
      theme = "black"
    }
    this.setState({ theme: theme, noty: true, notifyText: "Theme Changed" })
    return;
  }

  setWallpaper = (id) => {
    const wallpaper = this.state.wallpaperItems[id];
    this.setState({ wallpaper: wallpaper, noty: true, notifyText: "Wallpaper Changed" });
    return;
  }


  setWheelColor = (id) => {
    let wheelColor = "";
    if (id === 0) {
      wheelColor = "#212121";
    }
    else if (id === 1) {
      wheelColor = "white";
    }
    else if (id === 2) {
      wheelColor = "#3E2723";
    }
    else if (id == 3) {
      wheelColor = "#3D5AFE";
    }
    this.setState({ wheelColor: wheelColor, noty: true, notifyText: "Wheel color changed" })

  }

  changeMenuBackward = () => {
    const navigationStack = this.state.navigationStack.slice();
    if (this.state.currentMenu === -2) {
      return;
    } else {
      const prevId = navigationStack.pop();
      this.setState({ currentMenu: prevId, navigationStack: navigationStack, active: 0 })
      return;
    }
  }

  changeMenuForward = (id, fromMenu) => {
    // console.log("center")
    const navigationStack = this.state.navigationStack.slice();
    if (fromMenu !== -2 && fromMenu !== -1 && fromMenu !== 1 && fromMenu !== 4 && fromMenu !== 3 &&
      fromMenu !== 8 && fromMenu !== 9 && fromMenu !== 0 && fromMenu !== 7 && fromMenu !== 10) {
      return;
    }
    if (fromMenu === -1) { // main menu
      navigationStack.push(this.state.currentMenu);
      this.setState({ currentMenu: id, navigationStack: navigationStack, active: 0 })
      return;
    }
    if (fromMenu === -2) { // lock screen
      navigationStack.push(this.state.currentMenu);
      this.setState({ currentMenu: -1, navigationStack: navigationStack, active: 0 });
      return;
    }
    if (fromMenu === 7 || fromMenu === 0) { // music player
      this.togglePlayPause();
      return;
    }

    if (fromMenu === 8) {
      this.setTheme(id);
      return;
    }
    if (fromMenu === 9) {
      this.setWheelColor(id);
      return;
    }
    if (fromMenu === 10) {
      this.setWallpaper(id);
      return;
    }

    navigationStack.push(this.state.currentMenu);
    if (fromMenu === 4) {
      this.changePlayingSongFromMusicMenu(id, navigationStack, fromMenu)
      return;
    }
    const currentMenuId = this.state.menuMapping[fromMenu][id];
    this.setState({ currentMenu: currentMenuId, navigationStack: navigationStack, active: 0 });
  }

  changePlayingSongFromMusicMenu = (id, navigationStack) => {
    const songUrl = this.state.musicUrl[id];
    const songImg = this.state.songImgUrls[id];
    this.state.audio.pause();

    this.setState({ currentMenu: 7, songUrl: songUrl, navigationStack: navigationStack, active: 0, playing: true, songIndex: id, audio: new Audio(songUrl), songImg: songImg }, () => {
      this.state.audio.play();
    })
    return;
  }
  setNoty = () => {

    this.setState({ noty: false })
    return;
  }



  render() {
    const { active, menuItems, musicItems, musicUrl, songImgUrls, songItemsName, wallpaperItems, wallpaper, songIndex, songUrl, songImg, playing, currentMenu, theme, wheelColor, audio, noty, notifyText, setNoty } = this.state;
    return (
      <Ipod active={active} menuItems={menuItems} musicItems={musicItems} musicUrl={musicUrl} songImgUrls={songImgUrls} songItemsName={songItemsName} wallpaperItems={wallpaperItems} wallpaper={wallpaper} songIndex={songIndex}
        songUrl={songUrl} songImg={songImg} playing={playing} currentMenu={currentMenu} theme={theme} wheelColor={wheelColor} audio={audio} noty={noty} notifyText={notifyText} seekSongForward={this.seekSongForward}
        seekSongReverse={this.seekSongReverse} togglePlayPause={this.togglePlayPause} updateActiveMenu={this.updateActiveMenu} setTheme={this.setTheme} setWallpaper={this.setWallpaper} setWheelColor={this.setWheelColor}
        changeMenuBackward={this.changeMenuBackward} changeMenuForward={this.changeMenuForward} changePlayingSongFromMusicMenu={this.changePlayingSongFromMusicMenu} setNoty={this.setNoty} />
    );
  }
}

export default App;
