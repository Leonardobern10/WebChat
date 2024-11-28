import { ServerApp } from './server/Server';
const PORT: string = '3000';

const app = new ServerApp(PORT);

app.listen();
