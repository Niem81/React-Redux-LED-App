import React, {Component} from 'react';
import classnames from 'classnames';

class Led extends Component {
  render () {
    console.log(this.props);
    const {status,letter,segment} = this.props;

    return (
      <div className={status}>
        <div className={`${segment} segment-${letter}`}>
          <span className="segment-border">{letter}</span>
        </div>
      </div>
    )
  }
}

export default Led;
