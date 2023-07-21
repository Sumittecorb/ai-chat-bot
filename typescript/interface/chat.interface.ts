export interface ChatSession {
  data: {
    userId: string;
    sessionId: string;
  };
  code: number;
  message: string;
}

export interface SendMessage {
  data: SendMessageData;
  code: number;
  message: string;
}

interface SendMessageData {
  userId: string;
  sessionId: string;
  date: string;
  message: string;
  language: string;
  time: string;
  isActive: boolean;
  isDelete: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatData {
  data: ChatHistoryData[];
  code: number;
  message: string;
}
export interface ChatHistoryData {
  _id: string;
  date: string;
  time: string;
  title?: string;
}

export interface ChatHistoryUpdateData {

    date: string;
    newData: ChatHistoryData[];

}
