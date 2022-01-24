#!/usr/bin/env node
import helloUser from '../src/cli.js';

const [, message] = helloUser();
console.log(message);
