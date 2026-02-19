"use client"
import { motion } from "framer-motion" // or "motion/react-client"
import Check from '../assets/checked.png' 

export default function Jump() {
    return (
        <motion.img
            src={Check}
            alt="Jumping Checkmark"
            className="w-[100px]"
            // Define the jumping movement
            animate={{ y: [0, 80, 0] }} 
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                // This creates the 'stagger' feel if you have multiple icons
                delay: 0.2 
            }}
        />
    )
}