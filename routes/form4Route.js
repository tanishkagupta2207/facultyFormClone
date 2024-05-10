import { Router } from "express";
import { fetchForm4, updateForm4 } from '../controllers/form4.js';

const form4Route = Router();

form4Route.get('/:userId', fetchForm4);
form4Route.post('/:userId', updateForm4);

export default form4Route;