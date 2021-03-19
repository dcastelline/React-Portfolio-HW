import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <navbar bg="dark" variant="dark">
                <p href="#home">Daniel Castelline</p>
                <nav className="mr-auto">
                    <Link href="#about">About</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
            </navbar>
        </div>
    )
}
