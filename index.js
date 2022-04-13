#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName = 'player';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

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

await welcome();