
import React from 'react';
import Select from 'react-select';
import { customStyles } from './style-select.module.js'

class SelectComponent extends React.Component {

    render() {

        return (

            <Select styles={customStyles} options={this.props.getOptions()} onChange={(event) => this.props.changeSelect(event)}
                value={{
                    value: this.props.valuteSelect, label: this.props.getLabelSelect(this.props.valuteSelect,
                        this.props.valuteState[this.props.getIndexValute(this.props.valuteState, this.props.valuteSelect)].CharCode)
                }} />
        );
    }
}

export default SelectComponent;