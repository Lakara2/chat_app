import profile from '../images/profile_nav.jpg';
import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find a user'/>
            </div>
            <div className="userChat">
                <img src={profile} alt="photo" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;