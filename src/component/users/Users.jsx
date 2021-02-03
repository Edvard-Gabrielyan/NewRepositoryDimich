import React from 'react';
import './users.css';

let Users = (props) => {
    console.log(props.users)
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevC22fLSMTaIzdYHrLM2UW47wh6AXoha5RA&usqp=CAU',
                followed: true,
                fullName: 'Edvard',
                status: 'I am a frontEnd developer',
                location: {city: 'Erevan', country: 'Armenia'}
            },
            {
                id: '2',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevC22fLSMTaIzdYHrLM2UW47wh6AXoha5RA&usqp=CAU',
                followed: false,
                fullName: 'Aka',
                status: 'I am a beckEnd developer',
                location: {city: 'Los Angelos', country: 'USA'}
            },
            {
                id: '3',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevC22fLSMTaIzdYHrLM2UW47wh6AXoha5RA&usqp=CAU',
                followed: true,
                fullName: 'Lev',
                status: 'I am a frontEnd developer',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ]);
    }
    return (
        <div>
            {

                props.users.map(u => <div key={u.id} className='usersMain'>
                    <div className='leftPart'>
                        <div className='usersImg'>
                            <img src={u.photoUrl} alt='Chan'/>
                        </div>
                        <div className='followBtn'>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className='rightPart'>
                        <div className='statusName'>
                            <div className='name'>
                                {u.fullName}
                            </div>
                            <div className='status'>
                                {u.status}
                            </div>
                        </div>
                        <div className='location'>
                            <div className='country'>
                                {u.location.country}
                            </div>
                            <div className='city'>
                                {u.location.city}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;