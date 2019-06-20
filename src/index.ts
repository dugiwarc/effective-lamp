import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
// import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asfas'] }));
app.use(router);
// app.use(controllerRouter);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log('Listening on port 3000');
});
