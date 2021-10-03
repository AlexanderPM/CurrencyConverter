import React from 'react';
import styleClasses from './style.module.css'
import InputComponent from './components/input';
import SelectComponent from './components/select';

class DefaultCoupleComponent extends React.Component {

    inputControl(event) {

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
    changeInputOne = (event) => {

        if (this.inputControl(event)) {

            let courseValute = this.props.getCourse(this.props.valuteState, this.props.valuteSelectOne, this.props.valuteSelectTwo)
            let valueInputOne = event.target.value;
            let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne

            this.props.changeInputs((event.target.value), parseFloat(valueInputTwo).toFixed(2));
        }
        else {
            return;
        }
    }

    //При изменении Input Two
    changeInputTwo = (event) => {

        if (this.inputControl(event)) {

            let courseValute = this.props.getCourse(this.props.valuteState, this.props.valuteSelectOne, this.props.valuteSelectTwo)
            let valueInputTwo = event.target.value;
            let valueInputOne = courseValute.courseTwo / courseValute.courseOne * valueInputTwo

            this.props.changeInputs(parseFloat(valueInputOne).toFixed(2), (event.target.value));
        }

        else {
            return;
        }
    }

    //При изменении Select One 
    changeSelectOne = (event) => {

        let courseValute = this.props.getCourse(this.props.valuteState, event.value, this.props.valuteSelectTwo)
        let valueInputOne = this.props.valueInputOne;
        let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne
        this.props.selectValuteSelectOne(event.value, parseFloat(valueInputTwo).toFixed(2));
    }

    //При изменении Select Two 
    changeSelectTwo = (event) => {

        let courseValute = this.props.getCourse(this.props.valuteState, this.props.valuteSelectOne, event.value)
        let valueInputOne = this.props.valueInputOne;
        let valueInputTwo = courseValute.courseOne / courseValute.courseTwo * valueInputOne

        this.props.selectValuteSelectTwo(event.value, parseFloat(valueInputTwo).toFixed(2));
    }

    render() {

        return (
            <div className={styleClasses.defaultCoupleComponent}>
                <p><strong>Валюта <span className={styleClasses.ValuteName}>
                    {this.props.valuteState[this.props.getIndexValute(this.props.valuteState, this.props.valuteSelectOne)].CharCode}</span></strong></p>

                <SelectComponent
                    getOptions={this.props.getOptions}
                    changeSelect={this.changeSelectOne}
                    valuteSelect={this.props.valuteSelectOne}
                    getLabelSelect={this.props.getLabelSelect}
                    valuteState={this.props.valuteState}
                    getIndexValute={this.props.getIndexValute}
                />

                <InputComponent
                    valueInput={this.props.valueInputOne}
                    changeInput={this.changeInputOne}
                />

                <p><strong>Валюта <span className={styleClasses.ValuteName}>
                    {this.props.valuteState[this.props.getIndexValute(this.props.valuteState, this.props.valuteSelectTwo)].CharCode}</span></strong></p>

                <SelectComponent
                    getOptions={this.props.getOptions}
                    changeSelect={this.changeSelectTwo}
                    valuteSelect={this.props.valuteSelectTwo}
                    getLabelSelect={this.props.getLabelSelect}
                    valuteState={this.props.valuteState}
                    getIndexValute={this.props.getIndexValute}
                />
                <InputComponent
                    valueInput={this.props.valueInputTwo}
                    changeInput={this.changeInputTwo}
                />




            </div>
        );
    }
}

export default DefaultCoupleComponent;