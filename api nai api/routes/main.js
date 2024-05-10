//ไว้ประกาศ router from api table
var express = require('express');

var router = express.Router();
var Tagtype = require('../config/connectdb')

router.get('/api/get_machine', Tagtype.get_machine);
router.post('/api/post_machine', Tagtype.Insert_machine);
