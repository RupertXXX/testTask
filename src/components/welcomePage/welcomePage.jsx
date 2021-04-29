import React from 'react';
import { Redirect } from 'react-router-dom';
import c from './welcomePage.module.css'

const WelcomePage = ({userInfo, isRegistered}) => {
    if(!isRegistered) {
        return <Redirect to="register" />
    }
    return <div className={c.main}>
        <div className={c.title}>Welcome to <span>website</span></div>
        <div className={c.full_name}>{userInfo.name} {userInfo.secondName} {userInfo.fatherName}</div>
        <div className={c.birth_date}>{userInfo.birthDate}</div>
        <div className={c.email}>{userInfo.email}</div>
    </div>
}

export default WelcomePage;