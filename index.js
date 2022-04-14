#!/usr/bin/env node

import inquirer from 'inquirer';
import welcome from './screens/welcome.js';
import {
   question1,
   question2,
   question3,
   question4,
   question5,
} from './screens/questions.js';
import winner from './screens/winner.js';

let playerName = 'player';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function askName() {
   const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',

      default() {
         return 'Player';
      },
   });

   playerName = answers.player_name;
}

export { sleep, playerName };

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();
