import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  
`;

const Wrapper = styled.div`
  margin:.3em;
`;

const input = (props) => {
    let inputElement = null;
    let inputLabel = null;

    switch (props.elementType) {
        case ('text'):
            inputElement = <Input type="text" name={props.inputName} />
            inputLabel = <label htmlFor={props.inputName? props.inputName : null}>{props.inputLabel}</label>            
            break;
        case ('number'):
            inputElement = <Input type="number" name={props.inputName} />
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
        case ('selectSingle'):
        inputElement = (<select
            name={props.inputName}
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
    }
    return (
        <Wrapper>
            <p>{inputLabel} {inputElement}</p>
        </Wrapper>
    )
}

export default input;