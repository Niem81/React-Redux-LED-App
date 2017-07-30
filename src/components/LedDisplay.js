import React, {Component} from 'react';
import Led from './Led';
import classnames from 'classnames';
import Letter from '../Letter';

class LedDisplay extends Component {

  render() {
    console.log(this.props);
    const {dot} = this.props.numb;

    let ledDot = classnames(dot);

    return (
      <div className="vertical-center">
        <div className="led-container">
          <div className="display-container display-size-12">
            {Object.entries(Letter).map( ([key, value]) =>
              (
                <Led
                  key={key}
                  status={this.props.numb[`${key}`]}
                  letter={key}
                  segment={value.segment}
                />
              ))
            }
          </div>
          <div className="display-container display-size-12">
      			<div className={ledDot}>
              <div className="segment-xdot segment-dot">
                <span className="segment-border">DP</span>
              </div>
            </div>
      		</div>
        </div>
      </div>
    )
  }
}

export default LedDisplay;
