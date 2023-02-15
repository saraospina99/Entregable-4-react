import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

const UserCard = ({ user, deleUserById, setUpdateInfo, handleOpen }) => {

    const handleDelete = () => {
        deleUserById(user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpen() //modal
    }



    return (
        <article className='User__Card'>
            <div className='card__info'>
                <h2 className='card__name'>{`${user.first_name} ${user.last_name}`}</h2>
                <ul className='card__list'>
                    <li className='card__item'>
                        <span className='card__span'>Email</span>{user.email}
                    </li>
                    <li className='card__item'>
                        <span className='card__span'>Birthday</span>{user.birthday}
                    </li>
                </ul>
            </div>

            <div className='card__btn'>
                <i class="fa-solid fa-trash-can"></i>
                <button onClick={handleDelete} className='card__btn-icon'><i className='bi bi-trash3-fill'></i></button>
                <button onClick={handleUpdate} className='card__btn-icon'><i className='bi bi-pencil-square'></i></button>
                
            </div>
        </article>
    )
}

export default UserCard