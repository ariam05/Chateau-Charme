import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);
  return ( // if on the home page: then render the homepage data
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain'/>
          </motion.header>


          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
            JUST DO IT. <br className='x1:block hidden' /> 
            NIKE <br className='x1:block hidden' /> 
            </h1>
          </motion.div>

          <motion.div 
          {...headContentAnimation}
          className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique custom desigs with our brand-new custumization tool. <strong>
              Unleash your imagination </strong>{" "} and define your own style.</p>
          <CustomButton 
            type='filled'
            title="Customize It"
            handleClick={() => state.intro = false}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
          </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home



