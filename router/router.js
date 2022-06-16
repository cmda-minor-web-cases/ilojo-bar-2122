import express from 'express'

import { renderTimeline } from './routes/timelineRoute.js'
import { renderStory } from './routes/storyRoute.js'
import { renderHome } from './routes/homeRoute.js'
import { renderSendStory } from './routes/sendStoryRoute.js'
import { renderOffline } from './routes/offlineRoute.js'

export const router = express.Router()

router
    .get('/', renderHome)
    .get('/timeline', renderTimeline)
    .get('/timeline/:id', renderStory)
    .get('/send', renderSendStory)
    .get('/offline', renderOffline)