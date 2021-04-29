import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
//import { reset } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../common/validators/validators';
import { InputText, InputEmail, InputPassword, InputDate } from '../../common/formControls/formControls';
import c from './register.module.css';

const maxLength30 = maxLengthCreator(30);
const minLengthCreator3 = minLengthCreator(3);
const minLengthCreator6 = minLengthCreator(6);

const RegisterForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit} className={c.register}>
        <Field validate={[required, maxLength30, minLengthCreator3]} name='name' placeholder="Введите своё имя" component={InputText} />
        <Field validate={[required, maxLength30, minLengthCreator3]} name='secondName' placeholder="Введите свою фамилию" component={InputText} />
        <Field validate={[required, maxLength30, minLengthCreator3]} name='fatherName' placeholder="Введите своё отчество (если есть)" component={InputText} />
        <Field validate={[required, maxLength30, minLengthCreator3]} name='birthDate' placeholder="Выберите дату рождения" component={InputDate} />
        <Field validate={[required, maxLength30]} name='email' placeholder="Введите email" component={InputEmail} />
        <Field validate={[required, maxLength30, minLengthCreator6]} name='password' placeholder="Введите пароль" component={InputPassword} />
        <Field validate={[required, maxLength30, minLengthCreator6]} name='repeatPassword' placeholder="Повторите пароль" component={InputPassword} />
        {
            props.isSamePasswords || <div className={c.passwords_error}> <span>Пароли не одинаковые</span> </div>
        }
        <button name='Submit' className={c.registering_button}>Зарегестрироваться</button>
    </form>
    )
}
const RegisterFormWithRedux = reduxForm({form: 'registerForm'})(RegisterForm);

const Register = ({ setUserInfo, setIsRegistered, isRegistered }) => {

    const [isSamePasswords, setIsSamePasswords] = useState(true);

    const registering = (formData, dispatch) => {
        if(formData.password === formData.repeatPassword){
            let userInfo = {
                name: formData.name, 
                secondName: formData.secondName,
                fatherName: formData.fatherName,
                birthDate: formData.birthDate,
                email: formData.email,
            }
            setUserInfo(userInfo);
            setIsRegistered(true);
            //dispatch(reset('registerForm'));
        }
        else{
            setIsSamePasswords(false);
        }
    }

    return <div className={c.main}>
        <div className={c.title}>Регистрация</div>
        {
            isRegistered
            ?
                <Redirect to='/welcome' />
            :
                <RegisterFormWithRedux onSubmit={registering} isSamePasswords={isSamePasswords} />
        }
    </div>
}

export default Register;