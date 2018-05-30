import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  state = {
    term: ""
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: "" })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="Find a city"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(null, { fetchWeather })(SearchBar)
