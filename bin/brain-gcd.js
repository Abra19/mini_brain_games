#!/usr/bin/env node
import helloUser from '../src/cli.js';
import brainLogic from '../src/index.js';

const [name, message] = helloUser();
console.log(message);
brainLogic(name, '3');
