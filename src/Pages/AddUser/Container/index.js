
import AddUser from '../Component/AddUser';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { AddUser } = state;
  return { AddUser };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(AddUser);