import {Component} from 'react';
import Planets from './Loader';
import Cookies from 'js-cookie';

export default class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
            isWeatherData: true
        };
        //this.getMyLocation = this.getMyLocation.bind(this);
    }

    // getLatLog(position) {
    //     let lat = position.coords.latitude;
    //     let long = position.coords.longitude;
    //     this.setState({latitude: lat});
    //     this.setState({longitude: long});
    //     this.setState({isWeatherData: false});
    // }
  
    async getMyLocation(url) {
        const response = await fetch(url);
        const weatherData = await response.json();
        if(!weatherData.error) {
            Cookies.set("Values",weatherData,{ expires: 0.04167 });
        } 
        this.setState({data: weatherData});
        if(this.state.data.current)
        {
            this.setState({isWeatherData:false});
        }
    };
    
    async componentDidMount() {
        const apiKey = "f83ba4931a2543b9aa280640202912";
        let CookieData = Cookies.getJSON("Values");
        if(CookieData === undefined) {
            let url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=";
            navigator.geolocation.getCurrentPosition((position) => {
                url += `${position.coords.latitude},${position.coords.longitude}`;
                console.log(url);
                this.getMyLocation(url);
              });
        } else {
            const weatherData = Cookies.getJSON("Values");
            this.setState({isWeatherData:false});
            this.setState({data: weatherData});
        }

        if(this.state.data !== undefined )
        {
            this.setState({isLoading: false});
        }
    };

    render() {
        return (
            <div>
                <Planets data = {this.state.data} isLoading = {this.state.isLoading} isWeatherData = {this.state.isWeatherData} />
            </div>
        );
    }
};