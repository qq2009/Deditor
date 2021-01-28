import mitt from "mitt";

const emitter = mitt();

class Bus {
  on(name: string, callback: Function) {
    emitter.on(name, (p) => callback(p));
  }

  emit(name: string, p) {
    emitter.emit(name, p);
  }
}

const bus = new Bus();

export default bus;
