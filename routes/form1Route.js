import { Router } from "express";
import { fetchForm1, updateForm1 } from '../controllers/form1.js';

const form1Route = Router();

form1Route.get('/:userId', fetchForm1);
form1Route.post('/:userId', updateForm1);

export default form1Route;