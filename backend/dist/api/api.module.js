"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const car_module_1 = require("./car/car.module");
const queue_module_1 = require("./queue/queue.module");
const order_module_1 = require("./order/order.module");
const events_module_1 = require("./events/events.module");
const notification_module_1 = require("./notification/notification.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            car_module_1.CarModule,
            queue_module_1.QueueModule,
            order_module_1.OrderModule,
            events_module_1.EventsModule,
            notification_module_1.NotificationModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        providers: [],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map