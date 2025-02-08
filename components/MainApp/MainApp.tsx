import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Header from '../Header/Header';
import MainCanvas from '../MainCanvas/MainCanvas';
import SectionHome from '../Sections/SectionHome/SectionHome';
import { Welcome } from '../Welcome/Welcome';
import classes from './MainApp.module.css';

function MainApp() {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <div className={classes.content}>
          <SectionHome />
          <section className={classes.section}>PROJECTS</section>
          <section className={classes.section}>ABOUT</section>
          <section className={classes.section}>CONTACT</section>
        </div>
      </main>
      <MainCanvas />
      {/* <Container> */}
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      {/* </Container> */}
    </>
  );
}

export default MainApp;
