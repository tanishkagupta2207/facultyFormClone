import { Router } from "express";
import {loginUser} from '../controllers/login.js'

const loginRoute = Router();

loginRoute.post('/', loginUser);

export default loginRoute;
