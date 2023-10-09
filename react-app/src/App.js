import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import NewProduct from "./components/createProduct";
import EditProduct from "./components/EditProduct";
import CreateReview from "./components/createReview";
import ProductDetails from "./components/productDetails";
import UserProfile from './components/UserProfile'
import Search from './components/Search'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          
           <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/search/:search">
            <Search />
          </Route>
        
          <Route exact path="/new_product">
            <NewProduct />
          </Route>
          <Route exact path="/userProfile/:user_id">
            <UserProfile />
          </Route>
          <Route exact path="/products/:product_id">
            <ProductDetails />
          </Route>
          <Route exact path="/edit_product/:product_id">
            <EditProduct />
          </Route>

          <Route exact path="/create_review">
            <CreateReview />
          </Route>

          
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
