import React from "react";
import "../CSS/playing.css"
import { FaPause, FaPlay } from "react-icons/fa";

class Playing extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: "0",
        }
        this.intervalId = "";
    }


    componentDidMount() {
        const { audio } = this.props;
        this.setState({ currentTime: audio.currentTime });
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: audio.currentTime })
        }, 100)
    }
    componentWillUnmount() {

        clearInterval(this.intervalId)

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.songIndex !== this.props.songIndex) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(() => {
                this.setState({ currentTime: this.props.audio.currentTime })
            }, 100)
        }
    }

    render() {

        const { songItemsName, playing, songIndex, audio, songImgUrls } = this.props;

        var currentTimeRender = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
        var durationRender = Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
        const percentageRender = { width: (this.state.currentTime / audio.duration * 100) + "%" };
        if (durationRender === "NaN:NaN") {
            durationRender = "0:00"
        }
        if (Math.floor(this.state.currentTime % 60 < 10)) {
            currentTimeRender = Math.floor(this.state.currentTime / 60) + ":0" + Math.floor(this.state.currentTime % 60);
        }

        return (
            <div className="now-playing-container" style={{ backgroundColor: "#fff" }}>
                <div className="song-details">
                    <img src={songImgUrls[songIndex]} alt="songImg" />
                    <div>
                        <h6>{songItemsName[songIndex]}</h6>
                        {playing && <h4 className="play-pause-nav"> playing</h4>}
                        {!playing && <h4 className="play-pause-nav"> pause</h4>}
                    </div>
                </div>
                <div className="status">
                    {currentTimeRender}
                    <div id="progress">
                        <div style={percentageRender} id="progress-bar"></div>
                    </div>
                    {durationRender}
                </div>
            </div>
        )
    }
}

export default Playing;