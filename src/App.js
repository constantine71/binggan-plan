import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/dashboard/DashBoard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./configs/fbConfig";
import OperationFailed from "./components/exceptions/OperationFailed";
import NotFound from "./components/exceptions/NotFound";

const store = createStore(rootReducer);
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
  // enableClaims: true
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <article>
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path="/home" component={DashBoard}></Route>
                <Route path="/project/:id" component={ProjectDetails}></Route>
                <Route path="/signin" component={SignIn}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/create" component={CreateProject}></Route>
                <Route path="/failed" component={OperationFailed}></Route>
                <Route path="/not-found" component={NotFound}></Route>
                <Redirect from="/" exact to="/home"></Redirect>
                <Redirect to="/not-found"></Redirect>
              </Switch>
            </div>
          </article>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
