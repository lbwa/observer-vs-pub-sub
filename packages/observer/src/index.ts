class Observers {
  private list = new Set<Function>()

  register(observer: Function) {
    return this.list.add(observer)
  }

  unregister(observer: Function) {
    return this.list.delete(observer)
  }

  has(observer: Function) {
    return this.list.has(observer)
  }

  update<T = any>(message: T) {
    this.list.forEach(observer => observer(message))
  }
}

export class Subject {
  private observers = new Observers()

  register(observer: Function) {
    return this.observers.register(observer)
  }

  unregister(observer: Function) {
    return this.observers.unregister(observer)
  }

  has(observer: Function) {
    return this.observers.has(observer)
  }

  notify(message: any) {
    this.observers.update(message)
  }
}
