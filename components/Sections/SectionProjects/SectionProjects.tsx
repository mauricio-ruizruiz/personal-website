import BigTitle from './BigTitle/BigTitle';
import TitleProjects from './TitleProjects/TitleProjects';
import classes from './SectionProjects.module.css';

function SectionProjects({ projectsBigTitleRef, scrollYProgressProjectsBigTitle }: any) {
  return (
    <>
      <div className={classes.container}>
        <BigTitle
          scrollYProgressProjectsBigTitle={scrollYProgressProjectsBigTitle}
          projectsBigTitleRef={projectsBigTitleRef}
        />
        <div style={{ width: '100%', height: '100vh' }}></div>
        {/* <TitleProjects /> */}
        {/* <div className={classes.title_container}>Projects</div> */}
      </div>
    </>
  );
}

export default SectionProjects;
