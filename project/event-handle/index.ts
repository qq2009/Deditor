import bus from "./bus";
class EventHandle extends Document {
  public constructor() {
    super();
  };

  public backColor(p: string) {
    this.execCommand('backColor', false, p)
  }
}

export default function initEvent() {
  const Event = new EventHandle();
  bus.on(Event.backColor.name,Event.backColor.bind(document));

  return bus;
}
