import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
  
  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})
  
    return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate" }
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
            I focus on helping your brand grow 
            <br/> and move forward</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="baslik gorsel" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>

        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
            </h1>
            <button>GEÇMİŞ PROJELERİM</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <img src="/people.webp" alt="Proje 1" className="project-image" />
            <h2>Portfolio Website</h2>
            <p>
                React ve Framer Motion ile geliştirdiğim kişisel portfolyo sitem.
            </p>
            <button onClick={() => window.open("https://portfolio-link.com", "_blank")}>Detaylar</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <img src="/people.webp" alt="Proje 1" className="project-image" />
            <h2>Portfolio Website</h2>
            <p>
                React ve Framer Motion ile geliştirdiğim kişisel portfolyo sitem.
            </p>
            <button onClick={() => window.open("https://portfolio-link.com", "_blank")}>Detaylar</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <img src="/people.webp" alt="Proje 1" className="project-image" />
            <h2>Portfolio Website</h2>
            <p>
                React ve Framer Motion ile geliştirdiğim kişisel portfolyo sitem.
            </p>
            <button onClick={() => window.open("https://portfolio-link.com", "_blank")}>Detaylar</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <img src="/people.webp" alt="Proje 1" className="project-image" />
            <h2>Portfolio Website</h2>
            <p>
                React ve Framer Motion ile geliştirdiğim kişisel portfolyo sitem.
            </p>
            <button onClick={() => window.open("https://portfolio-link.com", "_blank")}>Detaylar</button>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Services
