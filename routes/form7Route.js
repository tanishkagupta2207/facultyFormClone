import { Router } from "express";
import { fetchForm7, updateForm7 } from '../controllers/form7.js';

const form7Route = Router();

form7Route.get('/:userId', fetchForm7);
form7Route.post('/:userId', updateForm7);

export default form7Route;