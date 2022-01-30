#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { generateRound, gameRules } from '../src/games/evenGame.js';

brainLogic(generateRound, gameRules);
