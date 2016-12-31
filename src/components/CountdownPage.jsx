import React from 'react'
import Timer from './Timer'

class CountdownPage extends React.Component {


    getQueryParameter = (name) => {
        const queryString = window.location.search,
            pattern = new RegExp(`${name}=([\\w%]+)`),
            match = queryString.match(pattern)
        console.log(match)
        if (!match) return null
        return decodeURI(match[1])
    }


    render() {
        const year = this.props.params.year || new Date().getFullYear(),
            month = this.props.params.month - 1 || 0,
            day = this.props.params.day || 1,
            time = this.getQueryParameter('time') || '0000',
            hours = parseInt(time.substr(0, 2)),
            minutes = parseInt(time.substr(2, 2)),
            title = this.getQueryParameter('title')
        console.log(year, month, day, time, hours, minutes, title)
        const date = new Date(year, month, day, hours, minutes)

        return(
            <div className="countdown-page">
                <div className="countdown-wrapper">
                    <Timer timestamp={date.valueOf()} />
                    <p className="countdown-description">till {title} on {date.toLocaleDateString()} at {date.toLocaleTimeString()}</p>
                </div>
            </div>
        )
    }
}

export default CountdownPage