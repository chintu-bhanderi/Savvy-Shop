import express from 'express';

const router = express.Router();

import { shopKeeprregister} from '../controllers/shopKeeprregister.js';
import {guestUserregister} from "../controllers/guestUserregister.js";


router.post('/shopkeeperregister', shopKeeprregister);
router.post('/guestuserregister', guestUserregister);

export default router;
