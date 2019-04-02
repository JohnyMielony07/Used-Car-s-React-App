import React from 'react';

const input = (props) => {
    let inputElement = null;

    //console.log(props.elementType);

    switch (props.elementType) {
        case ('text'):
            inputElement = <input type="text" />
            break;
        case ('number'):
            inputElement = <input type="number" />
            break;
        case ('select'):
            inputElement = (<select
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
            break;
    }
    return (
        <div>{inputElement}</div>
    )
}

export default input;