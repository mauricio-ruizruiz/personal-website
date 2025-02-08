import Link from 'next/link';
import { motion } from 'framer-motion';
import classes from './HeaderLogo.module.css';

function HeaderLogo() {
  return (
    <>
      <motion.div className={classes.container} whileHover={{ scale: 1.1 }}>
        <Link className={classes.link} href={'#home'} scroll={false}>
          <motion.div className={classes.link_letterm}>m.rr</motion.div>
        </Link>
      </motion.div>
    </>
  );
}

export default HeaderLogo;
