import Observer from "../observer/interface";

interface Subject {
  subscribeObserver(observer: Observer): void;

  unsubscribeObserver(observer: Observer): void;

  sendNotification(): void;
}

export default Subject;
