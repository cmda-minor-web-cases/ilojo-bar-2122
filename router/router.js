import express from 'express';
import { renderHome } from './routes/homeRoute.js';
import { renderBar } from './routes/barRoute.js';
import { renderStory } from './routes/storyRoute.js';

export const router = express.Router()

router
    .get('/', renderHome)
    .get('/bar', renderBar)
    .get('/:title', renderStory)