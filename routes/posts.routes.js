const { Router } = require('express');
const router = new Router();
const PostsController = require('../controllers/PostsController');

router.get('/posts',PostsController.get);
router.get('/posts/:id',PostsController.getOne);
router.post('/posts',PostsController.post);
router.post('/posts/delete/:id',PostsController.postDelete);
router.post('/posts/update/:id',PostsController.postUpdate);



module.exports=router;