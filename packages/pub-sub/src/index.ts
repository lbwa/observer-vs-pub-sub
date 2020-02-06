function isDef<T = any>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null
}

export class EventBus<T = string> {
  private topics = new Map<T, Set<Function>>()

  has(topic: T) {
    return this.topics.has(topic)
  }

  get(topic: T) {
    return this.topics.get(topic) || new Set()
  }

  subscribe(topic: T, subscriber: Function) {
    if (!this.has(topic)) {
      const topicSet = new Set([subscriber])
      this.topics.set(topic, topicSet)
      return topicSet
    }
    return this.get(topic).add(subscriber)
  }

  unsubscribe(topic: T, subscriber?: Function) {
    if (!this.has(topic)) {
      throw new TypeError(`[EventBus]: There is no topic named ${topic}`)
    }

    if (isDef(subscriber)) {
      // remove single subscriber
      return this.get(topic).delete(subscriber)
    } else {
      // remove entire topic
      return this.topics.delete(topic)
    }
  }

  publish<M = any>(topic: T, message: M) {
    if (!this.has(topic)) {
      throw new TypeError(`[EventBus]: There is no topic named ${topic}`)
    }

    this.get(topic).forEach(sub => sub(message))
  }
}
