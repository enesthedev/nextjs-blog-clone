import { motion } from "framer-motion"

function PageTransition(props) {
    return (
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            {...props}
        />
    )
}

export default PageTransition