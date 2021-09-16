
import { Router } from 'express'
import { getPosts, createMessage, getPost, updatePost, likePost, deletePost } from '../controllers/controller.js'

const router = Router()

router.get('/', getPosts)
router.post('/', createMessage)
router.get('/:id', getPost)
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

export default router


