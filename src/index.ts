import Container from 'typedi';
import { API } from './api';
import { TypeORM } from './db';
import { WebSocketService } from './websocket';
import SocketIO from './SocketIO';

(async () => {
  try {
    await TypeORM.init();
    // ------- plain version
    // await API.init();
    // -------  socket io version
    const httpServer = await API.init();
    const webSocketService = Container.get(WebSocketService);
    await webSocketService.init();
    // --- socket version
    await SocketIO.init(httpServer);
  } catch (err) {
    console.log(err);
  }
})();
