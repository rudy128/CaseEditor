import { ArrowRight } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center my-auto'>
            <div className='w-[70%] flex flex-col gap-y-6 justify-center items-center p-12 bg-white rounded-2xl border border-grey shadow-xl'>
                <h1 className='text-3xl'>Login</h1>
                <form action="" className='w-full'>
                    <div className='flex flex-col gap-y-3 my-4 w-full'>
                        <label htmlFor="Email ID">Email ID:</label>
                        <input type="text" placeholder='Email ID' required className='rounded-xl border border-grey p-4' />
                    </div>
                    <div className='flex flex-col w-full gap-y-3'>
                        <label htmlFor="Password">Password:</label>
                        <input type="password" placeholder='Password' required className='rounded-xl border border-grey p-4' />
                    </div>
                    <button className='w-full my-4 py-4 text-white hover:bg-green-500 bg-green-600 flex justify-center items-center rounded-2xl'>Login<ArrowRight className='ml-1.5 h-5 w-5' /></button>
                </form>
            </div>
        </div>
    )
}

export default page