import express from 'express'
import multer from 'multer'

import { renderTimeline } from './routes/timelineRoute.js'
import { renderStory } from './routes/storyRoute.js'
import { renderHome } from './routes/homeRoute.js'

import { renderSendStory  } from './routes/sendStoryRoute.js'
import { upload } from './routes/multer.js'

import { postSendStory } from './routes/postSendStoryRoute.js'

import { renderOffline } from './routes/offlineRoute.js'
import { renderLoadingstate } from './routes/loadingstateroute.js'

export const router = express.Router()

router
    .get('/', renderHome)
    .get('/timeline', renderTimeline)
    .get('/timeline/:id', renderStory)
    .get('/send', renderSendStory)
    .post('/send', upload.array('file', 7), postSendStory)
    .get('/offline', renderOffline)
    .get('/loading', renderLoadingstate)
