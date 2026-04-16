import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-3'>
                    <div>
                        <h1>6Bro</h1>
                    </div>
                    <div className='grid grid-cols-6 gap-2'>
                        <h1>Home</h1>
                        <h1>Contact</h1>
                        <h1>login</h1>
                        <h1>Pages</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar