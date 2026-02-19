import React from 'react'
import Vid from '../assets/vid7.webm'

const Hero = () => {
  return (
    <div className='flex 2xl:flex-row flex-col justify-center xl:items-between items-center mt-16'>

        <div className="rounded-3xl overflow-hidden" >
          <video className='xl:w-[800px] w-[600px] object-cover' src={Vid} autoPlay muted playsInline loop></video>
        </div>
       

        <div className='flex flex-col justify-start items-center m-16 w-[600px] xl:ml-36' >
            <h1 className='xl:text-6xl md:text-5xl text-4xl my-2 font-sans text-rose-400 lexend-font'>BUKET HOCA</h1>
            <h3 className='xl:text-5xl md:text-4xl text-3xl my-2 text-teal-500 lexend-font leading-16'>İLE</h3>
            <h1 className='xl:text-7xl md:text-6xl text-4xl md:text-nowrap wrap-anywhere text-wrap my-2 text-purple-500 text-center lexend-font leading-24'>İNGİLİZCE ÖĞREN</h1>
            <p className='xl:text-2xl text-lg my-12 text-slate-700 text-center xl:w-[450px] md:w-[350px] w-[250px]'>20 yıllık tecrübesi, Yüksek Lisans öğrenimi ve mükemmel iletişim kabiliyetiyle Buket Hoca Online Ders için sizi bekliyor.</p>
        </div>

    </div>
  )
}

export default Hero