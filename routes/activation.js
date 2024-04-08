
import { Router } from "express";
import { activationUser } from '../controllers/activation.js';

const activateRoute = Router();

activateRoute.get('/:userId', activationUser);

export default activateRoute;