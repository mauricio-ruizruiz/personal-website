import { useEffect, useRef, useState } from 'react';
import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Header from '../Header/Header';
import SectionHome from '../Sections/SectionHome/SectionHome';
import SectionProjects from '../Sections/SectionProjects/SectionProjects';
import { Welcome } from '../Welcome/Welcome';
import classes from './MainApp.module.css';

function MainApp() {
  // Mounted State
  const [hasMounted, setHasMounted] = useState(false);
  //Section Refs
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contcatRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <main className={classes.container}>
        <div className={classes.content}>
          <section className={classes.section_home} id="home">
            <SectionHome />
          </section>
          <section className={classes.section_projects} id="projects">
            <SectionProjects />
          </section>
          <section className={classes.section_about} id="about">
            <div className={classes.section}>ABOUT</div>
          </section>
          <section className={classes.section_contact} id="contact">
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
