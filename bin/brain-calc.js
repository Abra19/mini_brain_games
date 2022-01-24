#!/usr/bin/env node
import helloUser from '../src/cli.js';
import { resultExpression } from '../src/games/analyzeCalc.js';
import brainLogic from '../src/index.js';

const [name, message] = helloUser();
console.log(message);
console.log(resultExpression);
brainLogic(name, '2');
