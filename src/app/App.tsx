import React from 'react';
import s from 'app/app.module.scss';
import {Header} from "app/Header/Header";
import {Shares} from "features/Shares/Shares";

function App() {
  return (
    <div>
      <Header/>
      <div className={s.main}>
        <Shares/>
      </div>
    </div>
  );
}

export default App;
