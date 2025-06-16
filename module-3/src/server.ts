import app from './app';
import { client } from './config/mongoDB';
let server;
const port:number = 5000;

const bootstrap = async() => {

    await client.connect();

    server = app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})
}

bootstrap();