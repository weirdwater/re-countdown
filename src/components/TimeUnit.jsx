import React, { PropTypes } from 'react'

class TimeUnit extends React.Component {

    doubledigits = (value) => {
        let strVal = value.toString()
        if (strVal.length >= 2) return strVal
        return `0${strVal}`
    }

    render() {
        const {number, label} = this.props
        return (
            <li className="time-unit">
                <span className="time-unit__number">{this.doubledigits(number) || '00'}</span>
                <span className="time-unit__label">{label || '-'}</span>
            </li>
        )
    }
}

export default TimeUnit

TimeUnit.propTypes = {
    number: PropTypes.number,
    label: PropTypes.string
}