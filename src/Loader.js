import {Component} from 'react';
import Planet from './eachData';

export default class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        if(!this.props.isLoading && !this.props.isWeatherData)
        {
            return (
                <div>
                    <Planet data = {this.props.data} weatherData={this.props.data.current} />
                </div>
            );
        } else {
            return (
                <div>
                    {}
                </div>
            );
        }
        
    }
};