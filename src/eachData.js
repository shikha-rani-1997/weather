import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink} from 'react-router-dom';
import Logout from './Logout';
import './second.css';

export default class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgcolour: "grey"
        };
    }


    render() {
        const imgSrc = this.props.weatherData;
        return (
            <div className="weather">
                <Button className={"button"} style={{backgroundColor: this.state.bgcolour}}>
                    {this.props.weatherData.temp_c}
                </Button>
                <Button className={"button"} style={{backgroundColor: this.state.bgcolour}}>
                    {this.props.weatherData.condition.text}
                </Button>
                {
                    <img src={imgSrc.condition.icon} alt="Weather"/>
                }
                <h3> {this.props.data.location.name} </h3>
                <h2> {this.props.data.location.region} </h2>
                <NavLink to="/logout">
                    <Button style={{padding:"15px 15px"}}>Logout</Button>
                    </NavLink>
            </div>
        );
    }
};