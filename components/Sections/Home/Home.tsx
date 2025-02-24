import { useRef } from 'react';
import IntroTitles from './IntroTitles/InroTitles';
import TitleName from './TitleName/TitleName';
import classes from './Home.module.css';

function Home({
  appContainerRef,
  homeIntroRef,
  homeInterRef,
  homeMidRef,
  homeOutroRef,
  scrollYProgressHomeIntro,
  scrollYProgressHomeInterA,
  scrollYProgressHomeInterB,
  scrollYProgressHomeOutro,
}) {
  return (
    <>
      <TitleName scrollYProgressHomeIntro={scrollYProgressHomeIntro} />
      {/* <IntroTitles
        scrollYProgressHomeInter={scrollYProgressHomeInterA}
        scrollYProgressHomeInterB={scrollYProgressHomeInterB}
        scrollYProgressHomeOutro={scrollYProgressHomeOutro}
      /> */}
      <div className={classes.intro} ref={homeIntroRef} />
      <div className={classes.inter} ref={homeInterRef} />
      <div className={classes.mid} ref={homeMidRef} />
      <div
        className={classes.outro}
        ref={homeOutroRef}
        style={{ display: 'grid', placeItems: 'center' }}
      >
        outro
      </div>
    </>
  );
}

export default Home;
