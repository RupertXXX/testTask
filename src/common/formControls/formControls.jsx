import React from 'react';
import c from './formControls.module.css';

const InputConstructor = ({meta, ...props}) => {
    return<>
        {props.children}
        <div className={ 
            (((meta.touched && !meta.active) || meta.submitFailed) && meta.error) 
                ? c.error_input_text_message 
                : c.error_input_text_message_none 
            } >
            {(((meta.touched && !meta.active) || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
        </div>
    </>
}

export const InputText = ({input, meta, ...props}) => {
    return(
        <>
            <InputConstructor meta={meta}>
                <input type="text" className={ 
                        (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                            ? c.input_text_error 
                            : c.input_text 
                    } 
                {...input} {...props} />
            </InputConstructor>
        </>
    )
}
export const InputEmail = ({input, meta, ...props}) => {
    return(
        <>
            <InputConstructor meta={meta}>
                <input type="email" className={ 
                        (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                            ? c.input_text_error 
                            : c.input_text 
                    } 
                {...input} {...props} />
            </InputConstructor>
        </>
    )
}
export const InputPassword = ({input, meta, ...props}) => {
    return(
        <>
            <InputConstructor meta={meta}>
                <input type="password" className={ 
                        (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                            ? c.input_text_error 
                            : c.input_text 
                    } 
                {...input} {...props} />
            </InputConstructor>
        </>
    )
}
export const InputDate = ({input, meta, ...props}) => {
    return(
        <>
            <InputConstructor meta={meta}>
                <input type="date" className={ 
                        (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                            ? c.input_text_error 
                            : c.input_text 
                    } 
                {...input} {...props} />
            </InputConstructor>
        </>
    )
}