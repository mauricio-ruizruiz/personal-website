import { useEffect, useRef, useState } from 'react';
import { useInView, useScroll } from 'framer-motion';
import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Header from '../Header/Header';
import MainCanvas from '../MainCanvas/MainCanvas';
import SectionHome from '../Sections/SectionHome/SectionHome';
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

  // Home Refs Sections
  const introHomeTopRef = useRef(null);
  const introHomeFrontRef = useRef(null);

  // Main App InterSection Observers
  const homeIsInView = useInView(homeRef, { root: appContainerRef, once: false });
  const projectsIsInView = useInView(projectsRef, { root: appContainerRef, once: false });
  const aboutIsInView = useInView(aboutRef, { root: appContainerRef, once: false });
  const contactIsInView = useInView(contactRef, { root: appContainerRef, once: false });

  // Section Refs
  const homeTop = useRef<HTMLDivElement | null>(null);
  const homeFront = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <main className={classes.container}>
        <div className={classes.content} ref={appContainerRef}>
          <MainCanvas />
          <section className={classes.section_home} id="home" ref={homeRef}>
            <SectionHome homeFront={homeFront} homeTop={homeTop} />
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
      {/* </Container> */}
    </>
  );
}

export default MainApp;
