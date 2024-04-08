import { Router } from "express";
import {resetPassword} from '../controllers/resetPassword.js'

const resetPasswordRoute = Router();

resetPasswordRoute.post('/:userId', resetPassword);

export default resetPasswordRoute;
