import { Title } from '@mantine/core';
import classes from './TitleProjects.module.css';

function TitleProjects() {
  return (
    <>
      <div className={classes.title_container}>
        <Title size={'5em'}>projects</Title>
      </div>
    </>
  );
}

export default TitleProjects;
