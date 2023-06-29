import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chats from './pages/chats';
import Header from "./Component/Header";
import Login from "./pages/Login/login";
export const App = () => {
  return (
    <>
    <BrowserRouter>
     <Header /> 
      <Login/>
     {/* <Chats/> */}
     <Switch>
      <Route exact path="/write" Component={Chats} />
      <Route exact path="/login" Component={Login} />
     </Switch>
    </BrowserRouter>
    </>
  )
}
export default App;