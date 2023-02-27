import { OnQueueCompleted, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { BadGatewayException, Logger } from '@nestjs/common';
import { OrderService } from 'src/api/order/order.service';

@Processor('order-queue')
export class OrderCounsumer {
  private readonly logger = new Logger(OrderCounsumer.name);
  @Process('createOrder-job')
  createOrder(job: Job<unknown>) {
    const data = job.data;

    if (!data) {
      throw new BadGatewayException('Job data is invalid');
    }
  }
  @OnQueueCompleted()
  onCompleted(job: Job) {
    this.logger.log(
      `Job Create Order completed with data ${JSON.stringify(job.data)}`,
    );
  }
}
