import { motion, useTransform } from 'motion/react';
import { Title } from '@mantine/core';
import BigTitle from '../BigTitle/BigTitle';
import classes from './TitleProjects.module.css';

function TitleProjects() {
  return (
    <>
      <BigTitle />
      {/* <motion.div className={classes.title_container}>
        <Title size={'10em'}>projects</Title>
      </motion.div> */}
    </>
  );
}

export default TitleProjects;
