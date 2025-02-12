import { useRef } from 'react';
import classes from './SectionHome.module.css';

function SectionHome({ appContainerRef, homeTop, homeFront }: any) {
  return (
    <>
      <div className={classes.home_top} ref={homeTop} />
      <div className={classes.home_front} ref={homeFront} />
    </>
  );
}

export default SectionHome;
