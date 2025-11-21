import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/api/msg")
  getMsg() {
    return { message: "Hello from OLD NestJS v7!" };
  }
}
