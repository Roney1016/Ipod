import { Component } from "react";
// import wallpaper from "../static/wallpaper1.jpg";
// import wallpaper1 from "../static/wallpaper2.jpg";
// import wallpaper2 from "../static/wallpaper3.jpg";
import "../CSS/lockScreen.css"
class LockScreen extends Component {

    render() {
        const { wallpaper } = this.props
        return (
            <>
                <img src={wallpaper} className="wallpaper-img" />
                <div className="lock-mesg-container">
                    <h4>Press center button to unlock!</h4>
                </div>
            </>
        )
    }
}

export default LockScreen;