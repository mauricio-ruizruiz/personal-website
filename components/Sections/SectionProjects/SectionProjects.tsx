import BigTitle from './BigTitle/BigTitle';
import GridGallery from './GridGalley/GridGallery';
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
      </div>
      <GridGallery />
    </>
  );
}

export default SectionProjects;
