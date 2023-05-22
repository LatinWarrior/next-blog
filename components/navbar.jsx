import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            <style jsx>{`
                .navbar ul {
                    list-style-type: none;
                }

                .navbar li {
                    display: inline;
                }

                .navbar li:not(:first-child) {
                    margin-left: 0.75rem;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
