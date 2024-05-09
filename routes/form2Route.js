import { Router } from "express";
import { fetchForm2, updateForm2 } from '../controllers/form2.js';

const form2Route = Router();

form2Route.get('/:userId', fetchForm2);
form2Route.post('/:userId', updateForm2);

export default form2Route;