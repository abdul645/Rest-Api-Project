import express from 'express';
import {HomeController} from '../controller/HomeController.js';
import { adminLoginController } from '../controller/adminLoginController.js';
import { userLoginController } from '../controller/userLoginController.js';
import { userSignupController } from '../controller/userSignupController.js';
import { adminSignupController } from '../controller/adminSignupController.js';
import { userDashboardController } from '../controller/userDashboardController.js';
import { createDoc, getAllDocs, editDoc, updateDocDyId ,deleteDocById } from '../controller/DashBoardController.js';
import { productDetailController } from '../controller/productDetailController.js';

import multer from 'multer'
const router = express.Router();

var storage = multer.diskStorage({
        destination: function (req, file, cb) {
                cb(null, 'public/uploads/')
        },
        filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
        }
})

var upload = multer({ storage });


router.get('/', HomeController)

router.route('/adminLogin')
        .get(adminLoginController)
        .post(adminLoginController)

router.route('/adminSignup')
        .get(adminSignupController)
        .post(adminSignupController)


router.route('/userLogin')
        .get(userLoginController)
        .post(userLoginController)

router.route('/userSignup')
        .get(userSignupController)
        .post(userSignupController)


router.get('/dashboard', getAllDocs);
router.post('/dashboard', upload.single('fileName'), createDoc);
router.get('/edit/:id', editDoc);
router.post('/update/:id', updateDocDyId);
router.post('/delete/:id', deleteDocById)

router.get('/userDashboard', userDashboardController);

router.get('/productDetail/:id', productDetailController)

export default router;