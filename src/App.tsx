import React from 'react';
import s from './App.module.scss'
import {MainPage} from "./ui/main-page/MainPage";

function App() {
  return (
    <div className={s.app}>
      <MainPage/>
    </div>
  );
}

export default App;
