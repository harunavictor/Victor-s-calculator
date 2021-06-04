import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button className="clear" name="AC" clickHandler={this.handleClick}  />
         
          <Button className="op-div" name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button className="digit-7" name="7" clickHandler={this.handleClick} />
          <Button className="digit-8"  name="8" clickHandler={this.handleClick} />
          <Button className="digit-9" name="9" clickHandler={this.handleClick} />
          <Button className="mul" name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button className="digit-4" name="4" clickHandler={this.handleClick} />
          <Button className="digit-5" name="5" clickHandler={this.handleClick} />
          <Button className="digit-6" name="6" clickHandler={this.handleClick} />
          <Button className="op-sub " name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button className="digit-1" name="1" clickHandler={this.handleClick} />
          <Button className="digit-2" name="2" clickHandler={this.handleClick} />
          <Button className="digit-3" name="3" clickHandler={this.handleClick} />
          <Button className="op-add" name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button className="op-eq" name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
