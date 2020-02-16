import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimezoneContext from './TimezoneContext'

class TimezoneProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timezone: props.timezone,
    }
  }

  render() {
    const { timezones, idName, children } = this.props
    const { timezone } = this.state

    const contextValue = {
      timezones,
      timezone,
      idName,
    }

    return (
      <TimezoneContext.Provider value={contextValue}>
        {children}
      </TimezoneContext.Provider>
    )
  }
}

TimezoneProvider.propTypes = {
  children: PropTypes.node.isRequired,
  timezones: PropTypes.instanceOf(Object).isRequired,
  timezone: PropTypes.string,
  idName: PropTypes.string,
}

TimezoneProvider.defaultProps = {
  timezone: 'UTC',
  idName: '',
}


export default TimezoneProvider
