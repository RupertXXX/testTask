import React from 'react';
import c from './formControls.module.css';

export const InputText = ({input, meta, ...props}) => {
    console.log(meta);
    return(
        <>
            <input type="text" className={ 
                    (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                        ? c.input_text_error 
                        : c.input_text 
                } 
            {...input} {...props} />
            <div className={ 
                (((meta.touched && !meta.active) || meta.submitFailed) && meta.error) 
                    ? c.error_input_text_message 
                    : c.error_input_text_message_none 
                } >
                {(((meta.touched && !meta.active) || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
            </div>
        </>
    )
}
export const InputEmail = ({input, meta, ...props}) => {
    return(
        <>
            <input type="email" className={ 
                    (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                        ? c.input_text_error 
                        : c.input_text 
                } 
            {...input} {...props} />
            <div className={ 
                (((meta.touched && !meta.active) || meta.submitFailed) && meta.error) 
                    ? c.error_input_text_message 
                    : c.error_input_text_message_none 
                } >
                {(((meta.touched && !meta.active) || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
            </div>
        </>
    )
}
export const InputPassword = ({input, meta, ...props}) => {
    return(
        <>
            <input type="password" className={ 
                    (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                        ? c.input_text_error 
                        : c.input_text 
                } 
            {...input} {...props} />
            <div className={ 
                (((meta.touched && !meta.active) || meta.submitFailed) && meta.error) 
                    ? c.error_input_text_message 
                    : c.error_input_text_message_none 
                } >
                {(((meta.touched && !meta.active) || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
            </div>
        </>
    )
}
export const InputDate = ({input, meta, ...props}) => {
    return(
        <>
            <input type="date" className={ 
                    (((meta.touched && !meta.active) || meta.submitFailed) && meta.error)
                        ? c.input_date_error 
                        : c.input_date 
                } 
            {...input} {...props} />
            <div className={ 
                (((meta.touched && !meta.active) || meta.submitFailed) && meta.error) 
                    ? c.error_input_text_message 
                    : c.error_input_text_message_none 
                } >
                {(((meta.touched && !meta.active) || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
            </div>
        </>
    )
}