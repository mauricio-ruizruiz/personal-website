import Link from 'next/link';
import { motion } from 'framer-motion';
import { menulinks } from './data';
import { motionMenuButton, motionTextActive, motionTextDim } from './motion';
import classes from './HeaderMenu.module.css';

function HeaderMenu() {
  return (
    <>
      <div className={classes.menu}>
        {menulinks.map((menuitem: any) => (
          <motion.div
            key={menuitem.id}
            className={classes.item}
            whileHover="active"
            initial="neutral"
            // animate={activeSection === menuitem.label ? 'active' : 'neutral'}
            // variants={motionMenuButton}
          >
            <Link className={classes.link} href={menuitem.href} scroll={false}>
              <motion.span className={classes.link_text} variants={motionTextDim}>
                {menuitem.label}
              </motion.span>
              <motion.span className={classes.link_active} variants={motionTextActive}>
                {menuitem.label}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default HeaderMenu;
