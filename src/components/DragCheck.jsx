import Check from '../assets/checked.png'
import { motion } from "motion/react"
"use client"

export default function Drag(){
    return <motion.img drag 
        dragConstraints={{
        top: -50,
        left: -100,
        right: 100,
        bottom: 50,
    }}
    className='w-[100px]' src={Check} />





}