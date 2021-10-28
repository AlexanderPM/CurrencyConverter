import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import { asyncApi } from './../redux/actions/actions';

const App = () => {

  const valuteState = useSelector(state => state.valuteState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncApi());
  }, [dispatch]);

  if (Object.values(valuteState).length > 1) {
    return (
      <div className='app-wraper'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  else {
    return (
      <div className="animations">
        <div className="download">
          <div className="fetchining"></div>
          <div className="download_message">Загрузка данных по курсам валют...</div>
        </div>
      </div>
    )
  }
}


export default App;