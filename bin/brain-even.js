#!/usr/bin/env node
import helloUser from '../src/cli.js';
import { questionIsEven } from '../src/games/analyzeEven.js';
import brainLogic from '../src/index.js';

const [name, message] = helloUser();
console.log(message);
console.log(questionIsEven);
brainLogic(name, '1');
