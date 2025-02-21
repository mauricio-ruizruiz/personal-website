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

  // // Scroll Effect
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
            <SectionProjects />
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
