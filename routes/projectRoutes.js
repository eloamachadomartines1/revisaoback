import { Router } from "express";

import { list, create, getById, update, remove } from "../controllers/projectController.js";

import { validateProject } from "../middlewares/validateProject.js"

import { authenticate } from "../middlewares/authenticate.js"


const router = Router()

router.get('/', list)

router.post('/', authenticate, validateProject, create)

router.get('/:id', getById)

router.patch('/:id', authenticate, validateProject, update)

router.delete('/:id', authenticate, remove)



export default router