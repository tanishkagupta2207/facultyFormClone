import { Router } from "express";
import { fetchInfo} from '../controllers/print.js';

const printRoute = Router();

printRoute.get('/:userId', fetchInfo);

export default printRoute;