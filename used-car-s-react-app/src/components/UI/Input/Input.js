import React from 'react';

const input = (props) => {
    let inputElement = null;
    let inputLabel = null;

    switch (props.elementType) {
        case ('text'):
            inputElement = <input type="text" name={props.inputName} />
            inputLabel = <label htmlFor={props.inputName? props.inputName : null}>{props.inputLabel}</label>            
            break;
        case ('number'):
            inputElement = <input type="number" name={props.inputName} />
            inputLabel = <label htmlFor={props.inputName? props.inputName : null}>{props.inputLabel}</label>
            break;
        case ('select'):
            inputElement = (<select
                name={props.inputName} 
                multiple
            //value={props.value}
            // onChange={props.changed}
            >
                {props.options.split(', ').map(el => (
                    <option key={el} value={el}>
                        {el}
                    </option>
                ))}
            </select>
            )
            inputLabel = <label htmlFor={props.inputName? props.inputName : null}>{props.inputLabel}</label>
            break;
    }
    return (
        <div>
            <p>{inputLabel} {inputElement}</p>
        </div>
    )
}

export default input;