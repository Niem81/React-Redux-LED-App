import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../App.css';

class LedView extends Component {

  constructor(props){
    super(props);
    this.state = {
      newCSS : ''
    }
  }



  render () {
    if (this.props.numb) {
      console.log(this.props.numb)
    }
    return (
      <div className={this.props.numb.inputCSS}>
        {this.props.numb.number}
        <div className="segment-x segment-a"><span className="segment-border">a</span></div>
        <div className="segment-y segment-b"><span className="segment-border">b</span></div>
        <div className="segment-y segment-c"><span className="segment-border">c</span></div>
        <div className="segment-x segment-d"><span className="segment-border">d</span></div>
        <div className="segment-y segment-e"><span className="segment-border">e</span></div>
        <div className="segment-y segment-f"><span className="segment-border">f</span></div>
        <div className="segment-x segment-g"><span className="segment-border">g</span></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    numb: state.activeNumber,
    segments: state.segments
  }
}

export default connect(mapStateToProps)(LedView)
