import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Component/Header/'
import SwitchComp from './Component/SwitchComp/'
import Footer from './Component/Footer'

import style from './index.module.css'

const App = () => (
  <BrowserRouter>
    <Header className={style.HeaderSection}/>
    <SwitchComp className={style.BodySection}/>
    <Footer className={style.FooterSection} />
  </BrowserRouter>
)
export default App;

