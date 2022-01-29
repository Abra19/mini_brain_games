#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { makeQuestionAndTrueAnswerGCD, questionForGCD } from '../src/games/gcdGame.js';

brainLogic(makeQuestionAndTrueAnswerGCD, questionForGCD);
