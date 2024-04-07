
import { Router } from "express";
import { registerUser } from '../controllers/register.js';

const registerRoute = Router();

registerRoute.post('/', registerUser);

export default registerRoute;