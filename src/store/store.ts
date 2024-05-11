export type UserId = string;
export interface Chat {
  id: string;
  userId: UserId;
  name: string;
  message: string;
  upVotes: UserId[];
  downVotes: UserId[];
}
export abstract class Store {
  constructor() {}
  initRoom(roomId: string) {}
  getChats(room: string, limit: number, offset: number) {}
  addChat(userId: UserId, name: string, room: string, message: string) {}
  upVote(userId: UserId, room: string, chatId: string) {}
}
