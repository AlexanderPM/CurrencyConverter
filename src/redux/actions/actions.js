import axios from "axios";
import { UPDATE_VALUTE } from "../constants/constants";
import { CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_ONE } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_TWO } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_ONE } from '../constants/constants';
import { CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_TWO } from '../constants/constants';
import { CHANGE_DEFAULT_COUPLE_ONE_INPUTS } from '../constants/constants';
import { CHANGE_DEFAULT_COUPLE_TWO_INPUTS } from '../constants/constants';


export function selectValuteDefaultCoupleOneSelectOne(selectedValue, updateValueTwo) {
    return { type: CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_ONE, selectedValue: selectedValue, updateValueTwo: updateValueTwo }
}
export function selectValuteDefaultCoupleOneSelectTwo(selectedValue, updateValueTwo) {
    return { type: CHANGE_VALUTE_DEFAULT_COUPLE_ONE_SELECT_TWO, selectedValue: selectedValue, updateValueTwo: updateValueTwo }
}
export function selectValuteDefaultCoupleTwoSelectOne(selectedValue, updateValueTwo) {
    return { type: CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_ONE, selectedValue: selectedValue, updateValueTwo: updateValueTwo }
}
export function selectValuteDefaultCoupleTwoSelectTwo(selectedValue, updateValueTwo) {
    return { type: CHANGE_VALUTE_DEFAULT_COUPLE_TWO_SELECT_TWO, selectedValue: selectedValue, updateValueTwo: updateValueTwo }
}
export function changeDefaultCoupleOneInputs(updateValueOne, updateValueTwo) {
    return { type: CHANGE_DEFAULT_COUPLE_ONE_INPUTS, updateValueOne: updateValueOne, updateValueTwo: updateValueTwo }
}
export function changeDefaultCoupleTwoInputs(updateValueOne, updateValueTwo) {
    return { type: CHANGE_DEFAULT_COUPLE_TWO_INPUTS, updateValueOne: updateValueOne, updateValueTwo: updateValueTwo }
}

export function updateValute(updateState) {

    return { type: UPDATE_VALUTE, state: updateState }
}

export function asyncApi() {
    return function (dispatch) {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
        axios.get(url)
            .then(res => {
                const data = res.data.Valute;


                let rub = {
                    "CharCode": "RUB",
                    "ID": "R02222",
                    "Name": "Российский рубль",
                    "NumCode": "643",
                    "Nominal": 1,
                    "Previous": 1,
                    "Value": 1,
                }
                const data_export = Object.values(data);
                data_export[34] = rub;
                dispatch({ type: UPDATE_VALUTE, state: data_export})
            })
    }
}

