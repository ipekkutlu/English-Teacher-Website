import React from 'react'
import Buket from '../assets/buket2.png'
import EnterAnimation from './Hakkında'

const About = () => {
  return (
    <sectio id="about" className='flex xl:flex-row flex-col justify-around items-center xl:m-36 m-12' >

        <img className="w-[400px] shadow-lg rounded-2xl xl:m-0 m-8" src={Buket}/>

        <div>
            <EnterAnimation/>
            <p className='text-lg max-w-xl text-justify leading-relaxed '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium at laborum atque hic omnis laboriosam facere totam cupiditate, quod sunt perspiciatis ratione consequatur porro in sapiente esse vitae beatae. Consequatur saepe, provident fugiat tempora nam quod non error similique voluptates, neque ipsam debitis explicabo eveniet suscipit ad omnis, corrupti quisquam sit animi? Quam aliquid fugit, suscipit est architecto tempora cupiditate molestias magnam, vero pariatur dignissimos cum autem voluptatum soluta vitae reprehenderit sint. Excepturi illum fuga dolorum quo, tempore sapiente, repudiandae accusantium iusto aut asperiores sint odio recusandae eligendi laudantium numquam! Ad perspiciatis asperiores et voluptatibus? Obcaecati, eveniet iste! Debitis.</p>
        </div>


    </sectio>
  )
}

export default About