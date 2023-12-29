import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='px-20 flex justify-between items-center py-8'>
            <Link href={'/'} className='relative w-32'>
                <img src={'/images/logo_l.svg'} alt='logo' />
            </Link>
            <div className='flex gap-x-8 items-center'>
                <button>
                    <FontAwesomeIcon
                        icon={faMoon}
                        className={'h-4 w-4 text-teal-500'}
                    />
                </button>
                <button className='rounded-xl py-2.5 font-semibold font-mont '>Claim Drop</button>
                <button className='rounded-xl py-2.5 font-semibold font-mont greenToPurple px-3 hover:scale-[0.98] duration-200 transition'>Login</button>
            </div>
        </div>
    )
}

export default Navbar