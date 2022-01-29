#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { makeQuestionAndTrueAnswerPrime, questionForPrime } from '../src/games/primeGame.js';

brainLogic(makeQuestionAndTrueAnswerPrime, questionForPrime);
