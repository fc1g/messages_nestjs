import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { Message } from 'src/types/Message';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.findAll();
    const message = messages.find(message => message.id === id);

    return message;
  }

  async findAll() {
    const messages = JSON.parse(
      await readFile('./data/messages.json', 'utf-8'),
    ) as Message[];

    return messages;
  }

  async create(content: string) {
    const messages = await this.findAll();
    const id = String(Math.floor(Math.random() * 999));
    const message = { id, content } as Message;

    messages.push(message);

    await writeFile('./data/messages.json', JSON.stringify(messages));

    return message;
  }
}
