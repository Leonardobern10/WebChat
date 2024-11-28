import { Request, Response, Router } from 'express';
import { Routes } from '../contants/PathRoutes';
import { Console } from '../contants/Info';
import { HttpMethod } from '../contants/Methods';

const routerStatus = Router();

routerStatus.get(Routes.GET_HOME, (req: Request, res: Response) => {
    try {
        res.status(HttpMethod.SUCESS).json({
            message: Console.SUCESS.ROUTES_OK,
        });
    } catch (error) {
        res.status(HttpMethod.BAD_REQUEST).json({
            message: `${Console.ALERT.ERROR_BAD_REQUEST} ${error}`,
        });
        console.log(error);
    }
});

export default routerStatus;
