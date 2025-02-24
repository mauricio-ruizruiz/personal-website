import BigTitle from './BigTitle/BigTitle';
import GridGallery from './GridGalley/GridGallery';
import TitleProjects from './TitleProjects/TitleProjects';
import classes from './SectionProjects.module.css';

function SectionProjects({
  projectsBigTitleRef,
  scrollYProgressProjectsBigTitle,
  galleryRef,
  scrollYProgressProjectsGallery,
}: any) {
  return (
    <>
      <div className={classes.container}>
        <BigTitle
          scrollYProgressProjectsBigTitle={scrollYProgressProjectsBigTitle}
          projectsBigTitleRef={projectsBigTitleRef}
        />
      </div>
      <GridGallery
        galleryRef={galleryRef}
        scrollYProgressProjectsGallery={scrollYProgressProjectsGallery}
      />
    </>
  );
}

export default SectionProjects;
