import React from 'react'
import Location from '../assets/location.png'
import Email from '../assets/email .png'
import Phone from '../assets/telephone.png'
import Ist from '../assets/ist1.jpg'
import Happy from '../assets/happy.png'

const Contact = () => {
  return (
    <div  id="contact" className='contact flex xl:flex-row flex-col w-100% min-h-[500px] justify-around items-center my-64'>
        <img className='shadow-xl xl:w-[650px] md:w-[500px] w-[300px] rounded-xl xl:ml-16 md:ml-10' src={Ist} />
        <div className='flex flex-col gap-8 my-24 '>

        <div className='flex flex-row gap-3'>
            <img className='w-[35px]' src={Location}/>
            <p className='hover:text-slate-500 xl:text-2xl md:text-xl text-md lexend-font'>Lokasyon: İstanbul </p>
        </div>
        <a href="mailto:bkutlu162@gmail.com" className='flex flex-row gap-3'>
            <img  className='w-[35px]' src={Email}/>
            <p className='hover:text-slate-500 xl:text-2xl md:text-xl text-md  lexend-font'>Email: bkutlu162@gmail.com </p>
        </a>
        <a href="tel:+905332112211" className='flex flex-row gap-3'>
            <img  className='w-[35px]' src={Phone}/>
            <p className='hover:text-slate-500 xl:text-2xl md:text-xl text-md  lexend-font'>Telefon: 0533 211 22 11</p>
        </a>
    </div>

    </div>
  )
}

export default Contact