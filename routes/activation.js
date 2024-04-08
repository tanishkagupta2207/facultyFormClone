
import { Router } from "express";
import { activate } from '../controllers/activation.js';

const activateRoute = Router();

activateRoute.get('/', activate);

export default activateRoute;