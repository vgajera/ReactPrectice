import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
//import { addProduct } from "../redux/actions/productActions";

import { userActions } from "../../../_store";

function Product(props) {
  const dispatch = useDispatch();
  const auth = useSelector((x) => x.auth);
  const { users } = useSelector((x) => x.users);

  useEffect(() => {
   // dispatch(userActions.getAll());
  }, []);

  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [errors, setErrors] = useState({});

  // const productList = useSelector((state) => state.productList);

  // const handleValidation = () => {
  //   let errors = {};
  //   let formIsValid = true;

  //   if (!name) {
  //     formIsValid = false;
  //     errors["name"] = "Name field cannot be empty.";
  //   }

  //   if (!description) {
  //     formIsValid = false;
  //     errors["description"] = "Description field cannot be empty.";
  //   }

  //   if (!price) {
  //     formIsValid = false;
  //     errors["price"] = "Price field cannot be empty.";
  //   }

  //   if (isNaN(price)) {
  //     formIsValid = false;
  //     errors["price"] = "Price field should be a number.";
  //   }

  //   setErrors(errors);
  // };

  return (
    <div className="right-contentarea">
      <div className="main-head">
        <div className="container">
          <div className="header-top">
            <div className="profile-wrap">
              <h2>
                Welcome,
                <strong> {auth?.firstName}</strong>
              </h2>
            </div>
          </div>
          <div className="header-bottom"></div>
        </div>
      </div>
      <div className="block-row">
        <div className="container">
          <div className="page-heading">
            <h1>this is Product page </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
