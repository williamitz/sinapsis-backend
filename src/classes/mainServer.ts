import express from 'express';
import http from 'http';
import { PORT } from '../global/enviroments';

export class MainServer {

    private static _instance: MainServer;

    app: express.Application;
    port: number;

    private _httpServer: http.Server;

    constructor() {
        this.app = express();
        this.port = PORT;

        this._httpServer = http.createServer( this.app );
    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    onRun( callback: Function ) {
        this._httpServer.listen( this.port, callback() );
        // this.loadPublic();

    }
}