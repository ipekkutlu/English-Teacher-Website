import * as motion from "motion/react-client"


export default function EnterAnimation() {
    return <motion.h1 
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
                duration: 1.4,
                scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
            }}
    viewport={{ once: false }} 
    className='xl:text-5xl text-4xl xl:m-8 my-12 text-cyan-700 my-4 text-center lexend-font'>HAKKINDA</motion.h1>
}