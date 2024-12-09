import { Component } from "react";
import "../CSS/navbar.css"
import { IoIosBatteryFull } from "react-icons/io";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "00:00",
        }
        this.timer = null;
    }

    currentTime = () => {
        // console.log(new Date().getMinutes())
        const today = new Date();
        const hour = today.getHours();
        const minute = today.getMinutes();
        return `${hour}:${minute}`
    }
    shouldComponentUpdate(nextProps, nextState) {
        // if (this.state.time === nextState.time) {
        //     return false;
        // }
        return true;
    }
    componentDidMount() {
        // const currTime = this.currentTime();
        // this.setState({ time: currTime })
        const { noty } = this.props
        if (noty === true) return;
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.setState({ time: this.currentTime() })

        }, 1000)
    }
    componentDidUpdate() {
        const { noty, setNoty } = this.props;
        if (noty === true) {
            setTimeout(() => {
                setNoty()
            }, 1000)
        }
    }
    componentWillUnmount() {
        const { noty } = this.props
        if (noty != true) {
            clearInterval(this.timer)
        }

    }


    render() {
        const { noty, notifyText } = this.props;
        return (
            <div className="navbar">
                <div className="heading">Ipod</div>
                {!noty && <div className="time">{this.state.time}</div>}
                {noty && <div className="time">{notifyText}</div>}
                <div className="battary">
                    <IoIosBatteryFull />
                </div>
            </div>

        )
    }
    componentWillUnmount() {

        clearInterval(this.timer)
    }
}



export default Navbar;