import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Header from '../Header/Header';
import MainCanvas from '../MainCanvas/MainCanvas';
import Home from '../Sections/Home/Home';
import SectionProjects from '../Sections/SectionProjects/SectionProjects';
import { Welcome } from '../Welcome/Welcome';
import classes from './MainApp.module.css';

function MainApp({ activeSection, useToggle }: any) {
  // Mounted State
  const [hasMounted, setHasMounted] = useState(false);

  // Section Refs
  const appContainerRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Main App InterSection Observers
  const homeIsInView = useInView(homeRef, { root: appContainerRef, once: false });
  const projectsIsInView = useInView(projectsRef, { root: appContainerRef, once: false });
  const aboutIsInView = useInView(aboutRef, { root: appContainerRef, once: false });
  const contactIsInView = useInView(contactRef, { root: appContainerRef, once: false });

  // Home Section Refs
  const homeIntroRef = useRef<HTMLDivElement | null>(null);
  const homeInterRef = useRef<HTMLDivElement | null>(null);
  const homeMidRef = useRef<HTMLDivElement | null>(null);
  const homeOutroRef = useRef<HTMLDivElement | null>(null);

  // Projects Section Refs
  const projectsBigTitleRef = useRef<HTMLDivElement | null>(null); // BigTitle
  const projectsTitleRef = useRef<HTMLDivElement | null>(null); // TitleProjects
  const galleryRef = useRef<HTMLDivElement | null>(null); // Gallery
  const bgSection1Ref = useRef<HTMLDivElement | null>(null); //
  const bgSection2Ref = useRef<HTMLDivElement | null>(null); //
  const bgSection3Ref = useRef<HTMLDivElement | null>(null); //
  const bgSection4Ref = useRef<HTMLDivElement | null>(null); //
  const bgSection5Ref = useRef<HTMLDivElement | null>(null); //
  const bgSection6Ref = useRef<HTMLDivElement | null>(null); //

  // // Scroll Effects for Home Section
  const { scrollYProgress: scrollYProgressHomeIntro } = useScroll({
    container: appContainerRef,
    target: homeIntroRef,
    offset: ['start', 'end start'],
    layoutEffect: false,
  });

  const { scrollYProgress: scrollYProgressHomeInterA } = useScroll({
    container: appContainerRef,
    target: homeInterRef,
    offset: ['end', 'end start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressHomeInterB } = useScroll({
    container: appContainerRef,
    target: homeInterRef,
    offset: ['start', 'end start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressHomeOutro } = useScroll({
    container: appContainerRef,
    target: homeOutroRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  // // Scroll Effects for Projects Section
  const { scrollYProgress: scrollYProgressProjectsBigTitle } = useScroll({
    container: appContainerRef,
    target: projectsBigTitleRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const { scrollYProgress: scrollYProgressProjectsGallery } = useScroll({
    container: appContainerRef,
    target: galleryRef,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });
  // scroll Effects for  Cards
  const { scrollYProgress: scrollYProgressProjectsBgSection1 } = useScroll({
    container: appContainerRef,
    target: bgSection1Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressProjectsBgSection2 } = useScroll({
    container: appContainerRef,
    target: bgSection2Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressProjectsBgSection3 } = useScroll({
    container: appContainerRef,
    target: bgSection3Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressProjectsBgSection4 } = useScroll({
    container: appContainerRef,
    target: bgSection4Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressProjectsBgSection5 } = useScroll({
    container: appContainerRef,
    target: bgSection5Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const { scrollYProgress: scrollYProgressProjectsBgSection6 } = useScroll({
    container: appContainerRef,
    target: bgSection6Ref,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  return (
    <>
      <Header />
      <main className={classes.container} ref={appContainerRef}>
        <MainCanvas
          scrollYProgressHomeIntro={scrollYProgressHomeIntro}
          scrollYProgressHomeOutro={scrollYProgressHomeOutro}
        />
        <div className={classes.content}>
          <section className={classes.section_home} id="home" ref={homeRef}>
            <Home
              appContainerRef={appContainerRef}
              homeIntroRef={homeIntroRef}
              homeInterRef={homeInterRef}
              homeMidRef={homeMidRef}
              homeOutroRef={homeOutroRef}
              scrollYProgressHomeIntro={scrollYProgressHomeIntro}
              scrollYProgressHomeInterA={scrollYProgressHomeInterA}
              scrollYProgressHomeInterB={scrollYProgressHomeInterB}
              scrollYProgressHomeOutro={scrollYProgressHomeOutro}
            />
          </section>
          <section className={classes.section_projects} id="projects" ref={projectsRef}>
            <SectionProjects
              appContainerRef={appContainerRef}
              galleryRef={galleryRef}
              bgSection1Ref={bgSection1Ref}
              bgSection2Ref={bgSection2Ref}
              bgSection3Ref={bgSection3Ref}
              bgSection4Ref={bgSection4Ref}
              bgSection5Ref={bgSection5Ref}
              bgSection6Ref={bgSection6Ref}
              scrollYProgressProjectsGallery={scrollYProgressProjectsGallery}
              scrollYProgressProjectsBigTitle={scrollYProgressProjectsBigTitle}
              projectsBigTitleRef={projectsBigTitleRef}
              scrollYProgressProjectsBgSection1={scrollYProgressProjectsBgSection1}
              scrollYProgressProjectsBgSection2={scrollYProgressProjectsBgSection2}
              scrollYProgressProjectsBgSection3={scrollYProgressProjectsBgSection3}
              scrollYProgressProjectsBgSection4={scrollYProgressProjectsBgSection4}
              scrollYProgressProjectsBgSection5={scrollYProgressProjectsBgSection5}
              scrollYProgressProjectsBgSection6={scrollYProgressProjectsBgSection6}
            />
          </section>
          <section className={classes.section_about} id="about" ref={aboutRef}>
            <div className={classes.section}>ABOUT</div>
          </section>
          <section className={classes.section_contact} id="contact" ref={contactRef}>
            <div className={classes.section}>CONTACT</div>
          </section>
        </div>
      </main>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}

export default MainApp;
