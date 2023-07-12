import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chats from './pages/chats';
import Header from "./Component/Header";
import Login from "./pages/Login/login";
import Home from "./Home/Home";
export const App = () => {
  return (
    <BrowserRouter>
    <Home />
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/write" component={Chats} />
        <Route exact path="/login" component={Login} /> */}
      </Switch>
    </BrowserRouter>
  )
}
export default App;