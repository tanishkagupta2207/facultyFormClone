import { Router } from "express";
import { activationUser } from '../controllers/activation.js';

const form1Route = Router();

form1Route.get('/:userId', activationUser);
form1Route.post('/:userId', activationUser);

export default form1Route;