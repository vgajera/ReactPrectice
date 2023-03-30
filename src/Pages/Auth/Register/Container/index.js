import Register from '../Component/Register';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { Register } = state;
  return { Register };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(Register);