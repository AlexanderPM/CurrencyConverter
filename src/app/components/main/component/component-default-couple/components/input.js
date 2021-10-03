import React from 'react';
import styleClasses from './style-input.module.css'

class InputComponent extends React.Component {

    render() {

        return (        
                <input typeof="text"  value={this.props.valueInput} 
                    className={styleClasses.SelectInput} 
                    onChange={(event) => this.props.changeInput(event)}
                    onKeyPress={(event) => {
                        if (!/[0-9.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    ></input> 
        );
    }
}

export default InputComponent;