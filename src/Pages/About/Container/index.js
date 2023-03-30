
import About from '../Component/About';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { About } = state;
  return { About };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(About);