import { Server } from 'socket.io';
import { NotificationsEntity } from '../notification/entity/notification.entity';
import { ServerToClientEvents } from './types/event';
export declare class EventsGateway {
    server: Server<any, ServerToClientEvents>;
    sendMessage(message: NotificationsEntity): void;
}
