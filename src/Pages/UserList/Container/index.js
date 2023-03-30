
import UserList from '../Component/UserList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { UserList } = state;
  return { UserList };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(UserList);