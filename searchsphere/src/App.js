import React from 'react'
// import { Switch ,Route } from "react-router-dom";
import Chats from './pages/chats';
import Header from "./Component/Header";
export const App = () => {
  return (
    <>
     <Header /> 
     <Chats/>
     {/* <Switch>
      <Route exact path="/" Component={Chats} />
     </Switch> */}
    <div>App</div>
    </>
  )
}
export default App;