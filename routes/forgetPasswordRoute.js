import { Router } from "express";
import {forgetPassword} from '../controllers/forgetPassword.js'

const resetPasswordRoute = Router();

resetPasswordRoute.post('/', forgetPassword);

export default forgetPasswordRoute;
