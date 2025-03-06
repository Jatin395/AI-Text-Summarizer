import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-around font-mono items-center h-28 p-2">
                <h2 className='text-lg sm:text-xl'>Summarify</h2>
                <h2>Made with ❤️ by Jatin 🚀🌟</h2>
                <ul className='flex gap-4 cursor-pointer'>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/service'}>Services</Link>
                    <Link to={'/contact'}>Contact</Link>
                </ul>
            </div>
        </>
    )
}

export default Footer