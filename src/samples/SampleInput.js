import React, { Component } from 'react'

class SamplesInput extends Component {
  render(){
    return(
      <div className="outline">
        <form>
          <label>Sample Patient First Name:</label>
          <input type="text" name="firstName"/><br/>
          <label>Sample Patient Last Name:</label>
          <input type="text" name="lastName"/><br/>
          <label>Sample Patient Age:</label>
          <input type="text" name="lastName"/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SamplesInput;
