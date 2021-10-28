import React from 'react';
import styleClasses from './style.module.css'
import InputComponent from './components/input';
import SelectComponent from './components/select';
import { useDispatch } from 'react-redux';

const DefaultCoupleComponent = (props) => {

    const dispatch = useDispatch();

    const inputControl = (event) => {

        let countDot = ((event.target.value).match(/\./g) || []).length

        let countZero = ((event.target.value).match(/0/g) || []).length

        if (countDot > 1) {
            return false;
        }
        if (countZero > 1 && parseInt(event.target.value) === 0 && countDot !== 1) {
            return false;
        }
        if (event.target.value === ".") {
            return false;
        }
        return true;
    }

    //При изменении Input One 
    const changeInputOne = (event) => {

        if (inputControl(event)) {

            let courseValute = props.getCourse(props.valuteState, props.valuteSelectOne, props.valuteSelectTwo)
            let valueInputOne = event.target.value;
            let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne

            dispatch(props.changeInputs((event.target.value), parseFloat(valueInputTwo).toFixed(2)));
        }
        else {
            return;
        }
    }

    //При изменении Input Two
    const changeInputTwo = (event) => {

        if (inputControl(event)) {

            let courseValute = props.getCourse(props.valuteState, props.valuteSelectOne, props.valuteSelectTwo)
            let valueInputTwo = event.target.value;
            let valueInputOne = courseValute.courseTwo / courseValute.courseOne * valueInputTwo

            dispatch(props.changeInputs(parseFloat(valueInputOne).toFixed(2), (event.target.value)));
        }
        else {
            return;
        }
    }

    //При изменении Select One 
    const changeSelectOne = (event) => {

        let courseValute = props.getCourse(props.valuteState, event.value, props.valuteSelectTwo)
        let valueInputOne = props.valueInputOne;
        let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne
        
        dispatch(props.selectValuteSelectOne(event.value, parseFloat(valueInputTwo).toFixed(2)));
    }

    //При изменении Select Two 
    const changeSelectTwo = (event) => {

        let courseValute = props.getCourse(props.valuteState, props.valuteSelectOne, event.value)
        let valueInputOne = props.valueInputOne;
        let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne

        dispatch(props.selectValuteSelectTwo(event.value, parseFloat(valueInputTwo).toFixed(2)));
    }

        return (
            <div className={styleClasses.defaultCoupleComponent}>
                <p><strong>Валюта <span className={styleClasses.ValuteName}>
                    {props.valuteState[props.getIndexValute(props.valuteState, props.valuteSelectOne)].CharCode}</span></strong></p>

                <SelectComponent
                    getOptions={props.getOptions}
                    changeSelect={changeSelectOne}
                    valuteSelect={props.valuteSelectOne}
                    getLabelSelect={props.getLabelSelect}
                    valuteState={props.valuteState}
                    getIndexValute={props.getIndexValute}
                />

                <InputComponent
                    valueInput={props.valueInputOne}
                    changeInput={changeInputOne}
                />

                <p><strong>Валюта <span className={styleClasses.ValuteName}>
                    {props.valuteState[props.getIndexValute(props.valuteState, props.valuteSelectTwo)].CharCode}</span></strong></p>

                <SelectComponent
                    getOptions={props.getOptions}
                    changeSelect={changeSelectTwo}
                    valuteSelect={props.valuteSelectTwo}
                    getLabelSelect={props.getLabelSelect}
                    valuteState={props.valuteState}
                    getIndexValute={props.getIndexValute}
                />
                <InputComponent
                    valueInput={props.valueInputTwo}
                    changeInput={changeInputTwo}
                />
            </div>
        );
}

export default DefaultCoupleComponent;