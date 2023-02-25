import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('order-queue')
export class Counsumer {
    @Process('createOrder-job')
    createOrder(job: Job<unknown>) {
        console.log(job.data)
       return job.data
    }

}