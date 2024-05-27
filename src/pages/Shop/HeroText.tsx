import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';
import Dokumentace from '../../assets/Dokumentace_vzor2 (3).pdf'
export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Explore the{' '}
          <Text component="span" className={classes.highlight} inherit>
            project documentation
          </Text>{' '}
          and code on GitHub
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Dive deep into our project by accessing detailed documentation on GitHub. Learn about our codebase, contribute to the project, and stay updated with the latest changes.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() => window.open('https://github.com/RobiNZajicek/stcoks2-2.git', '_blank')}
          >
            View on GitHub
          </Button>
          <Button
            className={classes.control}
            size="lg"
            
          >
        <a href={Dokumentace} download="" style={{color:'white'}}>Read the Documentation</a> 
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default HeroText;
