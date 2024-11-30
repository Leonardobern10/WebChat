import { Request, Response, Router } from 'express';
import { Routes } from '../contants/PathRoutes';
import { HttpStatusCodes } from '../contants/HttpStatusCodes';
import { Messages } from '../contants/Messages';

const routerStatus = Router();

routerStatus.get(Routes.GET_HOME, (req: Request, res: Response) => {
    try {
        res.status(HttpStatusCodes.OK).json({
            message: Messages.ROUTE_OK,
        });
    } catch (error) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({
            message: `${Messages.ERROR_GET_HISTORY} ${error}`,
        });
        console.log(error);
    }
});

export default routerStatus;
