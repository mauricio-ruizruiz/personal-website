import BigTitle from './BigTitle/BigTitle';
import GridGallery from './GridGalley/GridGallery';
import TitleProjects from './TitleProjects/TitleProjects';
import classes from './SectionProjects.module.css';

function SectionProjects({
  projectsBigTitleRef,
  scrollYProgressProjectsBigTitle,
  galleryRef,
  scrollYProgressProjectsGallery,
  bgSection1Ref,
  bgSection2Ref,
  bgSection3Ref,
  bgSection4Ref,
  bgSection5Ref,
  bgSection6Ref,
  scrollYProgressProjectsBgSection1,
  scrollYProgressProjectsBgSection2,
  scrollYProgressProjectsBgSection3,
  scrollYProgressProjectsBgSection4,
  scrollYProgressProjectsBgSection5,
  scrollYProgressProjectsBgSection6,
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
        bgSection1Ref={bgSection1Ref}
        bgSection2Ref={bgSection2Ref}
        bgSection3Ref={bgSection3Ref}
        bgSection4Ref={bgSection4Ref}
        bgSection5Ref={bgSection5Ref}
        bgSection6Ref={bgSection6Ref}
        scrollYProgressProjectsGallery={scrollYProgressProjectsGallery}
        scrollYProgressProjectsBgSection1={scrollYProgressProjectsBgSection1}
        scrollYProgressProjectsBgSection2={scrollYProgressProjectsBgSection2}
        scrollYProgressProjectsBgSection3={scrollYProgressProjectsBgSection3}
        scrollYProgressProjectsBgSection4={scrollYProgressProjectsBgSection4}
        scrollYProgressProjectsBgSection5={scrollYProgressProjectsBgSection5}
        scrollYProgressProjectsBgSection6={scrollYProgressProjectsBgSection6}
      />
    </>
  );
}

export default SectionProjects;
