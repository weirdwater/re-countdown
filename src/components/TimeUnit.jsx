import React, { PropTypes } from 'react'

class TimeUnit extends React.Component {
    render() {
        const {number, label} = this.props
        return (
            <li className="time-unit">
                <span className="time-unit__number">{number || '00'}</span>
                <span className="time-unit__label">{label || '-'}</span>
            </li>
        )
    }
}

export default TimeUnit

TimeUnit.propTypes = {
    number: PropTypes.string,
    label: PropTypes.string
}