#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { makeQuestionAndTrueAnswerProgression, questionForProgression } from '../src/games/progressionGame.js';

brainLogic(makeQuestionAndTrueAnswerProgression, questionForProgression);
