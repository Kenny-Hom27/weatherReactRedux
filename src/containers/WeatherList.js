import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map((weather) => weather.main.temp * (9/5) - 459.67)
    const humidities = cityData.list.map((weather) => weather.main.humidity)
    const pressures = cityData.list.map((weather) => weather.main.pressure)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="green" units="°F"/></td>
        <td><Chart data={humidities} color="red" units="hPa"/></td>
        <td><Chart data={pressures} color="blue" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
