#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { generateRound, gameRules } from '../src/games/gcdGame.js';

brainLogic(generateRound, gameRules);
