import React from 'react';
import styleClasses from './style-input.module.css'

const InputComponent = (props) => {

        return (        
                <input typeof="text"  value={props.valueInput} 
                    className={styleClasses.SelectInput} 
                    onChange={(event) => props.changeInput(event)}
                    onKeyPress={(event) => {
                        if (!/[0-9.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    ></input> 
        );
}

export default InputComponent;