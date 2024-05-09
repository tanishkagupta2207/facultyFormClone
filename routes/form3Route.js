import { Router } from "express";
import { fetchForm3, updateForm3 } from '../controllers/form3.js';

const form3Route = Router();

form3Route.get('/:userId', fetchForm3);
form3Route.post('/:userId', updateForm3);

export default form3Route;