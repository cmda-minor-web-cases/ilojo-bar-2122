import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'
const repoName = 'ilojobar';
const accessToken = '';
const routes = [
  {
    type: 'info',
    path: '/story',
  },
]

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})
