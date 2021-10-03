
import { UPDATE_VALUTE } from "../constants/constants";

let valuteStateInitial =
[
        {
            "ID": "0",
            "Name": "Получение данных...",
            "Value": 0,
        }
    ]    ;

//Начальный редуктор, в который передаем state по умолчанию + обновление валют
function valuteState(state = valuteStateInitial, action) {
    if (action.type === UPDATE_VALUTE) {
        let newState = action.state;
        state = {...state, ...newState};
    }
    return state;
};

export default valuteState;


