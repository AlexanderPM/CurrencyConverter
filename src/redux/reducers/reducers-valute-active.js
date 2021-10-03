import { CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_ONE } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_TWO } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_ONE } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_TWO } from '../constants/constants';
import { CHANGE_DEFAULT_COUPLE_ONE_INPUTS } from '../constants/constants';
import { CHANGE_DEFAULT_COUPLE_TWO_INPUTS } from '../constants/constants';


const valuteStateInitial = {

    valuteDefaultCoupleOneSelectOne: "Доллар США",
    valuteDefaultCoupleOneSelectTwo: "Евро",
    valueDefaultCoupleOneInputOne: 0.00,
    valueDefaultCoupleOneInputTwo: 0.00,

    valuteDefaultCoupleTwoSelectOne: "Евро",
    valuteDefaultCoupleTwoSelectTwo: "Доллар США",
    valueDefaultCoupleTwoInputOne: 0.00,
    valueDefaultCoupleTwoInputTwo: 0.00,
};

//Редуктор при изменении select
function activeValuteState(state = valuteStateInitial, action) {

    let valueInputOne = action.updateValueOne;
    let valueInputTwo = action.updateValueTwo;

    switch (action.type) {
        case CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_ONE:
            let valuteDefaultCoupleOneSelectOneUpdate = action.selectedValue;
            state = { ...state, valuteDefaultCoupleOneSelectOne: valuteDefaultCoupleOneSelectOneUpdate, valueDefaultCoupleOneInputTwo: valueInputTwo };
            return state;
        case CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_TWO:
            let valuteDefaultCoupleOneSelectTwoUpdate = action.selectedValue;
            state = { ...state, valuteDefaultCoupleOneSelectTwo: valuteDefaultCoupleOneSelectTwoUpdate, valueDefaultCoupleOneInputTwo: valueInputTwo };
            return state;
        case CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_ONE:
            let valuteDefaultCoupleTwoSelectOneUpdate = action.selectedValue;
            state = { ...state, valuteDefaultCoupleTwoSelectOne: valuteDefaultCoupleTwoSelectOneUpdate, valueDefaultCoupleTwoInputTwo: valueInputTwo };
            return state;
        case CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_TWO:
            let valuteDefaultCoupleTwoSelectTwoUpdate = action.selectedValue;
            state = { ...state, valuteDefaultCoupleTwoSelectTwo: valuteDefaultCoupleTwoSelectTwoUpdate, valueDefaultCoupleTwoInputTwo: valueInputTwo };
            return state;
        case CHANGE_DEFAULT_COUPLE_ONE_INPUTS:
            state = { ...state, valueDefaultCoupleOneInputOne: valueInputOne, valueDefaultCoupleOneInputTwo: valueInputTwo };
            return state;
        case CHANGE_DEFAULT_COUPLE_TWO_INPUTS:
            state = { ...state, valueDefaultCoupleTwoInputOne: valueInputOne, valueDefaultCoupleTwoInputTwo: valueInputTwo };
            return state;
        default:
            return state;
    }
};

export default activeValuteState;