import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import Links from "./links/Links"
import { useState } from "react"
import {motion} from "framer-motion"

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition : {
      type:"spring",
      stiffness: 20,
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const Siderbar = () => {

  const [open, setOpen] = useState(false)

  
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Siderbar
