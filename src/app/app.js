import React from 'react';
import { connect } from 'react-redux';
import './app.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import { bindActionCreators } from 'redux';
import { selectValuteDefaultCoupleOneSelectOne } from '../redux/actions/actions';
import { selectValuteDefaultCoupleOneSelectTwo } from '../redux/actions/actions';
import { selectValuteDefaultCoupleTwoSelectOne } from '../redux/actions/actions';
import { selectValuteDefaultCoupleTwoSelectTwo } from '../redux/actions/actions';
import { changeDefaultCoupleOneInputs } from '../redux/actions/actions';
import { changeDefaultCoupleTwoInputs } from '../redux/actions/actions';
import { updateValute } from '../redux/actions/actions';


const App = (props) => {

  return (
      <div className='app-wraper'>
        <Header />
        <Main valuteState={props.valuteState}

          activeValuteState={props.activeValuteState}

          selectValuteDefaultCoupleOneSelectOne={props.selectValuteDefaultCoupleOneSelectOne}
          selectValuteDefaultCoupleOneSelectTwo={props.selectValuteDefaultCoupleOneSelectTwo}

          selectValuteDefaultCoupleTwoSelectOne={props.selectValuteDefaultCoupleTwoSelectOne}
          selectValuteDefaultCoupleTwoSelectTwo={props.selectValuteDefaultCoupleTwoSelectTwo}

          changeDefaultCoupleOneInputs={props.changeDefaultCoupleOneInputs}

          changeDefaultCoupleTwoInputs={props.changeDefaultCoupleTwoInputs}

          updateValute={props.updateValute}
        />
        <Footer />
      </div>
  )
}

function mapStateToProps(state) {
  return {
    valuteState: state.valuteState,
    activeValuteState: state.activeValuteState,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectValuteDefaultCoupleOneSelectOne: bindActionCreators(selectValuteDefaultCoupleOneSelectOne, dispatch),
    selectValuteDefaultCoupleOneSelectTwo: bindActionCreators(selectValuteDefaultCoupleOneSelectTwo, dispatch),
    selectValuteDefaultCoupleTwoSelectOne: bindActionCreators(selectValuteDefaultCoupleTwoSelectOne, dispatch),
    selectValuteDefaultCoupleTwoSelectTwo: bindActionCreators(selectValuteDefaultCoupleTwoSelectTwo, dispatch),
    updateValute: bindActionCreators(updateValute, dispatch),
    changeDefaultCoupleOneInputs: bindActionCreators(changeDefaultCoupleOneInputs, dispatch),
    changeDefaultCoupleTwoInputs: bindActionCreators(changeDefaultCoupleTwoInputs, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);