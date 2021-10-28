import styleClasses from './default-couple.module.css';
import DefaultCoupleComponent from './component-default-couple/default-couple-component';
import { selectValuteDefaultCoupleOneSelectOne } from '../../../../redux/actions/actions';
import { selectValuteDefaultCoupleOneSelectTwo } from '../../../../redux/actions/actions';
import { selectValuteDefaultCoupleTwoSelectOne } from '../../../../redux/actions/actions';
import { selectValuteDefaultCoupleTwoSelectTwo } from '../../../../redux/actions/actions';
import { changeDefaultCoupleOneInputs } from '../../../../redux/actions/actions';
import { changeDefaultCoupleTwoInputs } from '../../../../redux/actions/actions';
import { updateValute } from '../../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFlag } from './functions';
import { getValidName } from './functions';


const DefaultCouple = () => {

    const activeValuteState = useSelector(state => state.activeValuteState);
    const valuteState = useSelector(state => state.valuteState);
    const dispatch = useDispatch();

    //Преобразовываем в формат SELECT массив валют
    const getOptions = (valuteState) => {
        const options = []
        Object.values(valuteState).map((element) => (
            options.push({
                value: element.Name, label: <div className={styleClasses.iconSelect}><div className={styleClasses.imageSelect}>
                    <img src={element.FlagURL} height="30px" width="30px" alt="" /></div>
                    <div className={styleClasses.valueSelect}>{element.CharCode} &nbsp;{element.Name}</div></div>
            })
        ))
        return options;
    }

    //Получаем индекс валюты по её названию
    const getIndexValute = (valuteState, valuteName) => {
        let valuteIndex = Object.values(valuteState).findIndex(el => getValidName(el.Name) === valuteName);
        return valuteIndex;
    }

    //Получаем label для выбранных валют
    const getLabelSelect = (valuteName, charCode) => {

        let valuteNameOneDefault = <div className={styleClasses.iconSelect}><div className={styleClasses.imageSelect}>
            <img src={getFlag(valuteName)} height="25px" width="30px" alt="" /></div>
            <div className={styleClasses.valueSelect}>{charCode} &nbsp;{valuteName}</div></div>
        return valuteNameOneDefault;
    }

    //Пересчитываем значения при изменении хотя бы одного элемента формы
    const getCourse = (valuteState, valuteNameOne, valuteNameTwo) => {

        let nominalOne = Object.values(valuteState)[getIndexValute(valuteState, valuteNameOne)].Nominal;
        let nominalTwo = Object.values(valuteState)[getIndexValute(valuteState, valuteNameTwo)].Nominal;

        let courseOne = Object.values(valuteState)[getIndexValute(valuteState, valuteNameOne)].Value;
        let courseTwo = Object.values(valuteState)[getIndexValute(valuteState, valuteNameTwo)].Value;

        let courseOneReturn = courseOne / nominalOne; //Курс за единицу
        let courseTwoReturn = courseTwo / nominalTwo; // Курс за единицу

        return {
            courseOne: courseOneReturn,
            courseTwo: courseTwoReturn
        }
    }
    useEffect(() => {
        let copyObject = { ...valuteState};

        if (typeof copyObject[0].FlagURL === "undefined") {

            for (var i = 0; i < Object.values(copyObject).length; i++) {

                copyObject[i].FlagURL = getFlag(copyObject[i].Name);
                copyObject[i].Name = getValidName(copyObject[i].Name);
            }
            dispatch(updateValute(copyObject))
        }
    },[valuteState, dispatch])

    return (

        <div className={styleClasses.defaultCoupleContener}>

            <h3 className={styleClasses.title}>Валютные пары</h3>
            <p>Онлайн конвертация валют по курсу ЦБ РФ</p>
            <div className={styleClasses.defaultCouple}>
                <DefaultCoupleComponent
                    valuteState={valuteState}

                    valueInputOne={activeValuteState.valueDefaultCoupleOneInputOne}
                    valueInputTwo={activeValuteState.valueDefaultCoupleOneInputTwo}

                    valuteSelectOne={activeValuteState.valuteDefaultCoupleOneSelectOne}
                    valuteSelectTwo={activeValuteState.valuteDefaultCoupleOneSelectTwo}

                    selectValuteSelectOne={selectValuteDefaultCoupleOneSelectOne}
                    selectValuteSelectTwo={selectValuteDefaultCoupleOneSelectTwo}

                    changeInputs={changeDefaultCoupleOneInputs}

                    updateValute={updateValute}

                    getFlag={getFlag}
                    getOptions={getOptions}
                    getIndexValute={getIndexValute}
                    getLabelSelect={getLabelSelect}
                    getCourse={getCourse}
                />


                <DefaultCoupleComponent
                    valuteState={valuteState}

                    valueInputOne={activeValuteState.valueDefaultCoupleTwoInputOne}
                    valueInputTwo={activeValuteState.valueDefaultCoupleTwoInputTwo}

                    valuteSelectOne={activeValuteState.valuteDefaultCoupleTwoSelectOne}
                    valuteSelectTwo={activeValuteState.valuteDefaultCoupleTwoSelectTwo}

                    selectValuteSelectOne={selectValuteDefaultCoupleTwoSelectOne}
                    selectValuteSelectTwo={selectValuteDefaultCoupleTwoSelectTwo}

                    changeInputs={changeDefaultCoupleTwoInputs}

                    updateValute={updateValute}

                    getFlag={getFlag}
                    getOptions={getOptions}
                    getIndexValute={getIndexValute}
                    getLabelSelect={getLabelSelect}
                    getCourse={getCourse}
                />
            </div>
        </div>
    );
}
export default DefaultCouple;