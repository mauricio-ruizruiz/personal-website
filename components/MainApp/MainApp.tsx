import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Header from '../Header/Header';
import MainCanvas from '../MainCanvas/MainCanvas';
import SectionHome from '../Sections/SectionHome/SectionHome';
import SectionProjects from '../Sections/SectionProjects/SectionProjects';
import { Welcome } from '../Welcome/Welcome';
import classes from './MainApp.module.css';

function MainApp() {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <div className={classes.content}>
          <SectionHome />
          <SectionProjects />
          <section className={classes.section} id="about">
            ABOUT
          </section>
          <section className={classes.section} id="contact">
            CONTACT
          </section>
        </div>
      </main>
      {/* <MainCanvas /> */}
      {/* <Container> */}
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      {/* </Container> */}
    </>
  );
}

export default MainApp;
