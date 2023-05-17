import React from 'react'
import "./Header.css"

const Head = () => {
    return (
        <div className='head'>
            <div className="container d_flex">
                <div className='left row'>
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>+918095595412</label>
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>example@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <label>Theme FAQ's</label>
                    <label>Need Help</label>
                    <span>🎌</span>
                    <label htmlFor='' >EN</label>
                    <span>🎌</span>
                    <label htmlFor='' >INR</label>
                </div>
            </div>
        </div>
    )
}

export default Head