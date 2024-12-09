import { Component } from "react";
import "../CSS/wheel.css"
import { FaPause, FaPlay, FaBackward, FaForward } from "react-icons/fa";

import ZingTouch from "zingtouch";


class Wheel extends Component {
    constructor() {
        super();
        this.angle = 0;
    }
    wheelControll = (e) => {
        // console.log(e)
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        }

    }

    componentDidMount() {
        const { seekSongForward, togglePlayPause, seekSongReverse, changeMenuBackward } = this.props;
        const wheelControll = this.wheelControll; // function
        const wheel = document.getElementById("wheel");

        const activeRegion = ZingTouch.Region(wheel);   // set wheel element as the active region for rotation

        const menuIcon = document.getElementById("menu")
        const playpause = document.getElementById("play-pause");
        const reverse = document.getElementById("backward");
        const forward = document.getElementById("forward");

        const longTapGesture = new ZingTouch.Tap({
            maxDelay: 10000,
            numInputs: 1,
            tolerance: 1
        })

        activeRegion.bind(menuIcon, 'tap', function (e) {
            changeMenuBackward();
        })

        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelControll(e);
        })

        activeRegion.bind(playpause, 'tap', function (e) {
            togglePlayPause();
        })

        activeRegion.bind(reverse, longTapGesture, function (e) {
            seekSongReverse(e);
        })
        activeRegion.bind(forward, longTapGesture, function (e) {
            seekSongForward(e);
        })

    }

    render() {
        const { theme, active, currentMenu, changeMenuForward, wheelColor } = this.props;

        return (
            <div className="wheel-container" id="wheel-container">
                <div className="wheel" id="wheel" style={{ backgroundColor: wheelColor }}>
                    <div className="controll" id="menu">
                        <div>MENU</div>
                    </div>
                    <div className="controll" id="forward">
                        <FaForward />
                    </div>
                    <div className="controll" id="play-pause">
                        <FaPlay />
                        <FaPause />
                    </div>
                    <div className="controll" id="backward">
                        <FaBackward />
                    </div>
                    <div className="blank" id="blank" onClick={() => { changeMenuForward(active, currentMenu) }} style={{ backgroundColor: theme }}></div>
                </div>
            </div>
        )
    }
}

export default Wheel;