import React from 'react'

export default function ContactForm() {
  return (
    <div className='pt-38 pb-50 bg-[#F4EDE2] px-25'>
        <div className='flex flex-col items-center gap-8 pb-[179px]'>
            <h1 className='text-[#3E3F05] text-[48px] font-charman-serif-light leading-12'>Need a little help? We’re here.</h1>
            <p className='text-[#0B0B0B]  w-[939px] text-[24px] font-instrument-regular' >From reservations and dining enquiries to celebrations and special requests, our team is here to make things simple. Tell us what you need and we will be happy to guide you.</p>
        </div>
        <div className='flex flex-row items-center'>
            <div className='w-[50%]'>
                <h1 className='text-[#252600] text-[84px] font-charman-serif-light leading-15 mb-6'>Contact Us</h1>
                <p className='text-[24px] font-instrument-regular w-90 mb-18.75'>Let’s talk. Whatever you need, we’re ready to help.</p>
                <p className='font-instrument-regular text-[20px] text-[#0B0B0B]'>EMAIL: email@domain.com.au</p>
                <p className='font-instrument-regular  text-[20px] text-[#0B0B0B] mb-16'>PHONE: 04 000 0000</p>
                <p className='font-instrument-regular text-[20px] text-[#0B0B0B] mb-2'>ADDRESS</p>
                <p className='w-[235px] text-[#0B0B0B] font-charman-serif-light text-[32px] leading-7'>128 Euede Rivoli, 4th Melburne</p>
            </div>
            <div className='w-[50%] gap-12.5 flex flex-col items-start'>
                <div className='flex flex-row gap-10 w-full'>

                <input type="text" className='w-full border-b border-0 focus:outline-none text-[20px] font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black' placeholder='First Name'/>
                <input type="text" className='w-full border-b border-0 focus:outline-none text-[20px] font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black' placeholder='Last Name'/>
                </div>
                <input type="text" className='w-full border-b border-0 focus:outline-none text-[20px] font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black' placeholder='Your Email'/>
                <input type="text" className='w-full border-b border-0 focus:outline-none text-[20px] font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black' placeholder='Your phone no'/>
                <textarea  className='w-full h-20 border-b border-0 focus:outline-none text-[20px] font-instrument-regular placeholder:text-[#0B0B0B]/20 pb-2.5 border-black' placeholder='Your Message'/>
                <button className='border rounded-full px-7.5 py-2.5 cursor-pointer border-[#777A35] text-[#777A35]'>Send Message</button>
            </div>
        </div>
    </div>
  )
}
