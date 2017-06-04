import express from 'express'
import SearchController from '~/controllers/SearchController'

const router = express.Router()

router.route('/search')
    .get((req, res, next) => {
        new SearchController(req, res, next).index()
    })
    .post((req, res, next) => {
        new SearchController(req, res, next).search()
    })

export default router