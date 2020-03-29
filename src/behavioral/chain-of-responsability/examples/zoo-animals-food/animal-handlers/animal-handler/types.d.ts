interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string;
}

export default Handler;
