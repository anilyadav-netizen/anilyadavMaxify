import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <titel className="text-red-600">Hello Mr Anil</titel>
                </div>
                <div className='grid grid-cols-6 gap-2'>
                    <h3>hello1</h3>
                    <h3>hello2</h3>
                    <h3>hello3</h3>
                    <h3>vikas</h3>
                    <h3>shanti</h3>
                    <h3>Anil</h3>
                </div>
            </div>
        </>
    )
}

export default Navbar