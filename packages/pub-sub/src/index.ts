function isDef<T = any>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null
}

/**
 * @topic-based publish-subscribe system
 * @wiki https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern#Message_filtering
 * @different-from-observer
 * 1. publisher would not sent message to specific subscriber directly (by a
 * channel named message broker or message channel ).
 * observer pattern would notify observer directly.
 * 2. all subscribers have a namespace called **topic**. Observers in the
 * observer pattern has only one namespace.
 * 3. subject and observers knows about the existence of one another, but
 * publisher and subscriber not.
 */
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
