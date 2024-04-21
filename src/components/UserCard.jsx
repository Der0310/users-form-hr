import React from 'react';
import './styles/userCard.css';

const UserCard = ({user, deleteUser,setUpdateUser}) => {

    // console.log(user);

    const handleDelete = () => {
        deleteUser('users', user.id);

    }

    const handleEdit = () => {
        setUpdateUser(user);

    }

  return (
    <section className='user'>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='user__list'>
            <li className='user__item'><span>Email: </span><span>{user.email}</span></li>
            <li className='user__item'><span>Birthday: </span><span><ion-icon name="gift-outline"></ion-icon>{user.birthday}</span></li>
        </ul>
        <hr />
        <div className='user__buttons'>
            <button className='user__btnDelete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
            <button className='user__btnEdit' onClick={handleEdit}><ion-icon name="pencil-outline"></ion-icon></button>
        </div>
    </section>
  )
}

export default UserCard;