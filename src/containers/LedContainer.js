import { connect } from 'react-redux'
import { selectNumber } from '..actions/posts'

function mapStateToProps(state){
  return {
    numb: state.activeNumber,
    segments: state.segments
  }
}

export default connect(mapStateToProps)(LedView)
