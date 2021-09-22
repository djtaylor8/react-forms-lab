import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      maxChars: props.maxChars
    };
  }

  handleChange = (e) => {
    let newValue = e.target.value;
      this.setState(
        previousState => {
          return {
            value: newValue,
            maxChars: previousState.maxChars - 1
          }
        }
      )
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleChange(e)} value={this.state.value} />
        <span>{this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
