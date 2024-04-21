import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/userForm.css';

const UserForm = ({createUser,updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
    /*first_name, last_name, email, password, birthday */
    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
        if (updateUser) {
            reset(updateUser);// para q no se haga infitamnte y solo ocupo una sola vez q se ejecute se usa el Useeffect
            setIsOpen(true);
        }
    }, [updateUser]);// el [] es donde da condicion a cambiar
    

    const submit = data => {
        if (updateUser) {
            editUser('users', data, updateUser.id);
            setUpdateUser();
        } else {
            createUser('users', data);
        }
        setIsOpen(false);
        reset({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            birthday:''
        })
    } /*el uso de useform es para manejar el formulrio q tiene tantos inputs y no un useefect , esto esta vinculado con linea 21 en crear*/
    const handleClose = () => {
        setIsOpen(false);
        setUpdateUser();
        reset({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            birthday:''
         });
        }


  return (
    <div className={`form__back ${isOpen && 'active'}`}>
        <form className='form' onSubmit={handleSubmit(submit)}>
            <button onClick={handleClose} type='button' className='form__close'><ion-icon name="close-outline"></ion-icon></button>
            <h2 className='form__title'>New user</h2> 
            <div className='form__item'>
                <label htmlFor="first_name">First name</label>
                <input placeholder='First name' {...register('first_name') } id='first_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last name</label>
                <input placeholder='Last name' {...register('last_name')}  id='last_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="email">Email</label>
                <input placeholder='Email' {...register('email')}  id='email' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password</label>
                <input placeholder='Password' {...register('password')}  id='password' type="password" />
            </div>
            <div className='form__item'>
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')}  id='birthday' type="date" />
            </div>
            <button className='form__btn'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm;