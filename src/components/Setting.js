import React from "react";
import "../CSS/setting.css"
class Setting extends React.Component {

    render() {
        const { active } = this.props;
        return (

            <div className="setting">
                <h3>Setting</h3>
                <ul>
                    {active === 0 ? <li className="active">Theme</li> : <li>Theme</li>}
                    {active === 1 ? <li className="active">Wheel Color</li> : <li>Wheel Color</li>}
                    {active === 2 ? <li className="active">Wallpaper</li> : <li>Wallpaper</li>}
                </ul>
            </div>
        )
    }
}

export default Setting;