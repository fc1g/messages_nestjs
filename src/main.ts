import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

await (async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(process.env.PORT ?? 3000);
})();
