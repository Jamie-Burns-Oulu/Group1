import React, { Component } from 'react'

export default class Profile extends Component {

  render() {
    return (
      <div>
        <h1>This is {this.props.userData.username}'s profile</h1>
      </div>
    )
  }
}
