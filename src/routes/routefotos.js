const router = require('express').Router();
const upload = require('../libs/storage');
const fotocontrol = require('../models/controllfotos');

router.get('/list', fotocontrol.list);
router.post('/add', upload.single('image'), fotocontrol.save);   
router.delete('/delete/:id', fotocontrol.delete);
router.get('/storage/');
module.exports = router;
