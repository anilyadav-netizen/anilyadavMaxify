import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <titel className="text-red-600">Hello Mr Anil</titel>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <h3>hello1</h3>
                    <h3>hello2</h3>
                    <h3>login</h3>
                </div>
            </div>
        </>
    )
}

export default Navbar