#!/usr/bin/env node
import brainLogic from '../src/index.js';
import { makeQuestionAndTrueAnswerEven, questionForEven } from '../src/games/evenGame.js';

brainLogic(makeQuestionAndTrueAnswerEven, questionForEven);
