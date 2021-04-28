import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { maxLengthCreator, required } from '../../../../common/utils/validators/validators';
import c from './myPosts.module.css';
import { Textarea } from '../../../../common/formControls/formControls';

const maxLength30 = maxLengthCreator(30);

const RegisterForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit} className={c.addPost}>
        <Field validate={[required, maxLength30]} name='newPost' placeholder="Text of your new post" component={Textarea} />
        <button name='Submit' className={c.addPost_button}>Register</button>
    </form>
    )
}
const RegisterFormWithRedux = reduxForm({form: 'registerForm'})(RegisterForm);

const Register = () => {
    const sendPost = (formData, dispatch) => {
        props.sendPost(formData.newPost);
        dispatch(reset('profileNewPostForm'))
    }

    return <> 
        <RegisterFormWithRedux onSubmit={sendPost} />
    </>
}

export default Register;