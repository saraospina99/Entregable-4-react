import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import defaultValue from '../Utils/defaultValues';
import 'bootstrap-icons/font/bootstrap-icons.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, handleClose, setUpdateInfo }) => {

    const { reset, register, handleSubmit } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)

        } else {
            createNewUser(data)
        }

        handleClose()
        reset(defaultValue)
    }

    const cancelCardForm = () => {
        reset(defaultValue)
        setUpdateInfo()
        handleClose() //para que se cierre el form
    }



    return (
        <form className='Form' onSubmit={handleSubmit(submit)}>
            <h2 className='form__title'>Form User</h2>
            <div onClick={cancelCardForm} className='form__x'>x</div>
            <div className='form__item'>
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' {...register('email')} type="email" id='email' />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="password">Password</label>
                <input className='form__input' {...register('password')} type="password" id='password' />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="firstName">First name</label>
                <input className='form__input' {...register('first_name')} type="text" id='firstName' />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="lastName">Last name</label>
                <input className='form__input' {...register('last_name')} type="text" id='lastName' />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input className='form__input' {...register('birthday')} type="date" id='birthday' />
            </div>
            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUser