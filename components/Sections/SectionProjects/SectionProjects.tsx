import TitleProjects from './TitleProjects/TitleProjects';
import classes from './SectionProjects.module.css';

function SectionProjects() {
  return (
    <>
      <TitleProjects />
      <section className={classes.container} id="projects">
        {/* <div className={classes.title_container}>Projects</div> */}
      </section>
    </>
  );
}

export default SectionProjects;
