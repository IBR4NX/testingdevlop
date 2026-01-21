import { ImSpinner6 } from "react-icons/im";
import { motion } from "framer-motion";

export default function Sping() {
    return (
        <div className=" fixed top-0 left-0 h-screen w-screen z-50  backdrop-blur-xs text-3xl flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.1, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-gray-950/80 dark:bg-white/80 flex items-center size-40 min-w-sm lg:min-w-md p-10 rounded-2xl m-auto ">
                <ImSpinner6 size="50" className=" text-white dark:text-black m-auto backdrop rounded-full bg-white/10 animate-spin " />
            </motion.div>
        </div>
    )
}
