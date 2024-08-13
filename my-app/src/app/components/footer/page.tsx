import React from 'react'

export default function Footer(): JSX.Element {
    const fullYear = new Date().getFullYear();
    return (
        <div className='bg-gradient-to-r from-[#1049b3] to-[#2268eb] text-white shadow-md mt-10'>
            <div className='container mx-auto p-4 text-center'>
                <span className='md:text-title-sm2'>
                    © {fullYear} Tailwind CSS LLC. All rights reserved
                </span>
            </div>
        </div>
    )
}
