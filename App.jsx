// import { useState } from 'react'

import './App.css'
 import {RecoilRoot,useRecoilValue}from"recoil";
 import {networkAtom}from"atom";

function App() {

 return (
 <RecoilRoot>
  <MainApp/>
  </RecoilRoot>
 );
}
 function  MainApp (){
   const networkNotificationCount  = useRecoilValue(networkAtom)
 

return (

   
    <div>
      <button> Home</button>
      <button> My network ({networkNotificationCount >= 100? "99+":networkNotificationCount})</button>

      <button> Jobs()</button>
      <button> Messaging()</button>
      <button> Notification ()</button>
      <button> ME</button>

    </div>
  );
 }


export default App








