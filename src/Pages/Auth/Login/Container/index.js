import Login from '../Component/Login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { Login } = state;
  return { Login };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(Login);