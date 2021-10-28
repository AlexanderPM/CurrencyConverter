
import React from 'react';
import Select from 'react-select';
import { customStyles } from './style-select.module.js'

const SelectComponent = (props) => {

        return (
            <Select styles={customStyles} options={props.getOptions(props.valuteState)} onChange={(event) => props.changeSelect(event)}
                value={{
                    value: props.valuteSelect, label: props.getLabelSelect(props.valuteSelect,
                        props.valuteState[props.getIndexValute(props.valuteState, props.valuteSelect)].CharCode)
                }} />
        );
}

export default SelectComponent;