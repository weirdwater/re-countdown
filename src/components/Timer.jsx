import React from 'react'
import TimeUnit from './TimeUnit'

class Timer extends React.Component {
    render() {
        return (
            <ul className="timer">
                <TimeUnit label="weeks"/>
                <TimeUnit label="days"/>
                <TimeUnit label="hours"/>
                <TimeUnit label="minutes"/>
                <TimeUnit label="seconds"/>
            </ul>
        )
    }
}

export default Timer

