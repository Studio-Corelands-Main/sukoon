import React from 'react'

export default function SukoonGlimpse() {
  return (
    <>
    <div className='px-5 lg:px-25 bg-[#F4EDE2]'>

        <div className='flex flex-row justify-between items-center  pt-25 pb-7.5 gap-5'>
            <div className='w-[53%]'>
                <h1 className='font-charman-serif-light text-[40px] text-[#777A35] w-58 leading-10'>
                    A Glimpse Into Sukoon
                </h1>
            </div>
            <div className='w-[47%]'>
                <p className='text-[20px] font-instrument-regular text-[#0B0B0B]'> Some details are felt before they are noticed. The light, the textures, the table, the quiet corners and the moments shared between them all come together to create the Sukoon experience. </p>
            </div>
        </div>
        <div className='h-[.75px] bg-black '></div>
        <div className='flex flex-row pt-15'>
            <div className='w-[30%]'>
                <h1 className='text-[32px] text-[#474806]'>Functions</h1>
            </div>
            <div className='w-[70%]'>
                <img src="/images/hero-image.png" alt="" />
            </div>
        </div>

    </div>

    </>
  )
}
