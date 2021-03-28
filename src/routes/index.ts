import {Router} from 'express'
const router = Router()

import * as routes from '../controllers/videosController'

router.get('/videos', routes.getVideos)

router.get('/videos/:id', routes.getVideo)

router.post('/videos', routes.createVideos)

router.put('/videos/:id', routes.updateVideos)

router.delete('/videos/:id', routes.deleteVideo)

export default router