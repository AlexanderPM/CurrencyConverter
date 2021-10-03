import React from 'react';
import DefaultCouple from './component/default-couple';
import TableMaterialUI from './component/table-material-ul';
import styleClasses from './main.module.css';


const Main = (props) => {
    if (Object.values(props.valuteState).length > 1) {
        return (
            <main className={styleClasses.main} >
                <DefaultCouple
                
                    valuteState={props.valuteState}
                    activeValuteState={props.activeValuteState}

                    selectValuteDefaultCoupleOneSelectOne={props.selectValuteDefaultCoupleOneSelectOne}
                    selectValuteDefaultCoupleOneSelectTwo={props.selectValuteDefaultCoupleOneSelectTwo}
                    selectValuteDefaultCoupleTwoSelectOne={props.selectValuteDefaultCoupleTwoSelectOne}
                    selectValuteDefaultCoupleTwoSelectTwo={props.selectValuteDefaultCoupleTwoSelectTwo}

                    changeDefaultCoupleOneInputs ={props.changeDefaultCoupleOneInputs}
                    changeDefaultCoupleTwoInputs ={props.changeDefaultCoupleTwoInputs}
                    updateValute={props.updateValute}
                />  
                 <TableMaterialUI
                    valuteState={props.valuteState} />
            </main >
        )
    }
    else {
        return (
            <p>Получение данных...</p>
        )
    }

}

export default Main;