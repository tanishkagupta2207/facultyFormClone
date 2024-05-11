import { Router } from "express";
import { fetchSubmit, updateSubmit } from '../controllers/submit.js';

const submitRoute = Router();

submitRoute.get('/:userId', fetchSubmit);
submitRoute.post('/:userId', updateSubmit);

export default submitRoute;