import React from 'react'
import Timer from './Timer'

class CountdownPage extends React.Component {
    render() {
        return(
            <div className="countdown-page">
                <div className="countdown-wrapper">
                    <Timer/>
                    <p className="countdown-description">till the end of the World! on Thursday, November 20th 2017</p>
                </div>
            </div>
        )
    }
}

export default CountdownPage