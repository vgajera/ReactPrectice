
import Product from '../Component/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { Product } = state;
  return { Product };
};

const actionCreators = {
  // userLogin
};

export default connect(mapStateToProps, actionCreators)(Product);