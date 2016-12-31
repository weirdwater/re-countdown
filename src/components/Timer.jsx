import React, { PropTypes } from 'react'
import TimeUnit from './TimeUnit'

class Timer extends React.Component {

    constructor(props) {
        super(props)

        this.timeUnits = {
            y: {
                milliseconds: 31449600000,
                name: 'Years'
            },
            w: {
                milliseconds: 604800000,
                name: 'Weeks'
            },
            d: {
                milliseconds: 86400000,
                name: 'Days'
            },
            h: {
                milliseconds: 3600000,
                name: 'Hours'
            },
            m: {
                milliseconds: 60000,
                name: 'Minutes'
            },
            s: {
                milliseconds: 1000,
                name: 'Seconds'
            }
        }

        this.state = {
            timeLeft: {
                y: 0,
                w: 1,
                d: 0,
                h: 3,
                m: 4,
                s: 4
            }

        }
    }

    /**
     * Returns a map of how many years, weeks, days, hours, minutes and seconds are left.
     * @param {number} diff - No. of milliseconds
     * @param {Array} unitKeys - Array of unit keys (y, w, d, h, m, s). Correspond with a timeUnits map.
     * @returns {Object} Map of y, w, d, h, m, s with their respective value
     */
    calcTimeLeft = (diff, unitKeys) => {
        if (unitKeys.length === 0) {
            return {}
        }

        const keys = [...unitKeys],
            key = keys.pop(),
            unit = this.timeUnits[key],
            buKey = keys[keys.length - 1],
            biggerUnit = this.timeUnits[buKey],
            timeleft = this.calcTimeLeft(diff, keys)

        // Units too large
        if (unit.milliseconds > diff) {
            return timeleft
        }

        if (Object.keys(timeleft).length === 0) {
            // Biggest unit
            timeleft[key] = Math.floor((diff / unit.milliseconds))
        }
        else {
            // Any following unit{...timeleft}
            timeleft[key] = Math.floor((diff % biggerUnit.milliseconds) / unit.milliseconds)
        }

        return timeleft
    }

    getTimeLeftObject = () => {
        const now = Date.now(),
            diff = this.props.timestamp - now
        return this.calcTimeLeft(diff, Object.keys(this.timeUnits))
    }

    updateTimer = () => {
        this.setState({timeLeft: this.getTimeLeftObject()})
    }

    componentDidMount = () => {
        setInterval(this.updateTimer, 100)
    }

    render() {
        const timeLeft = this.getTimeLeftObject()
        return (
            <ul className="timer">
                {Object.keys(timeLeft)
                    .map(key => <TimeUnit
                        key={key}
                        number={timeLeft[key]}
                        label={this.timeUnits[key].name} />)}
            </ul>
        )
    }
}

export default Timer

Timer.proptypes = {
    timestamp: PropTypes.number.isRequired
}
