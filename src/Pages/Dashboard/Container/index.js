
import Dashboard from '../Component/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { Dashboard } = state;
  return { Dashboard };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(Dashboard);