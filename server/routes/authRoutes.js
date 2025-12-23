import express from 'express';

const route = express.Router();

import { register, login, logout } from '../controllers/authController';

route.post('/register', register);
route.post('/login', login);
route.post('/logout', logout);
export default route;
