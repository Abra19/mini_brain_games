#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { makeQuestionAndTrueAnswerCalc, questionForCalc } from '../src/games/calcGame.js';

brainLogic(makeQuestionAndTrueAnswerCalc, questionForCalc);
