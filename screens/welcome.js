import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from '../index.js';

async function welcome() {
   const rainbowTitle = chalkAnimation.rainbow('Welcome to the FireQuiz \n');

   await sleep();
   rainbowTitle.stop();

   console.log(`
   ${chalk.bgBlue('How to play:')}
   I am a process on your computer
   If you get any question wrong I will be ${chalk.bgRed('killed')}
   So get all the questions right...

   `);
}

export default welcome;
