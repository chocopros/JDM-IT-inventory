const router = require('express').Router();

const accesoriesServices = require('./accesories.services');


router.route('/')
    //.get()
    .post(accesoriesServices.createAccesories);

router.route('/earphones')
    .post(accesoriesServices.postEarphone);

router.route('/webcams')
    .post(accesoriesServices.postCam);



module.exports = router;