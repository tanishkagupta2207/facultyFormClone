import { Router } from "express";
import {forgetPassword} from '../controllers/forgetPassword.js'

const forgetPasswordRoute = Router();

forgetPasswordRoute.post('/', forgetPassword);

export default forgetPasswordRoute;
