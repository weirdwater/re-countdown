import React from 'react'
import Timer from './Timer'

class CountdownPage extends React.Component {
    render() {
        const title = "Arjo flies to Amsterdam",
            date = new Date(1484787600000)
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