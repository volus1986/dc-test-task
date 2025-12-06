import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private activeClients = 0;

  handleConnection() {
    this.activeClients++;

    this.server.emit('activeCount', this.activeClients);
  }

  handleDisconnect() {
    this.activeClients--;

    this.server.emit('activeCount', this.activeClients);
  }
}
