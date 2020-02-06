import { EventBus } from '../src'

describe('Publish-subscribe pattern', () => {
  let eventBus = new EventBus()

  beforeEach(() => {
    eventBus = new EventBus()
  })

  it('create a EventBus', () => {
    ;[
      eventBus.has,
      eventBus.get,
      eventBus.subscribe,
      eventBus.unsubscribe,
      eventBus.publish
    ].forEach(val => expect(val).toBeDefined())
  })

  it('has a topic', () => {
    const mockTopic = 'has a topic'
    const mockSubscriber = () => 1 + 2
    eventBus.subscribe(mockTopic, mockSubscriber)
    expect(eventBus.has(mockTopic))
  })

  it('has a subscription', () => {
    const mockTopic = 'has a subscription'
    const mockSubscriber = () => 3 + 4
    const subscriber = eventBus.subscribe(mockTopic, mockSubscriber)
    expect(subscriber.size).toStrictEqual(1)
  })

  it('handle duplicate subscription', () => {
    const mockTopic = 'handle duplicate subscription'
    const mockSubscriber = () => 5 + 6
    eventBus.subscribe(mockTopic, mockSubscriber)
    eventBus.subscribe(mockTopic, mockSubscriber)
    expect(eventBus.get(mockTopic).size).toStrictEqual(1)
  })

  it('handle multiple subscriber in the same topic', () => {
    const mockTopic = 'publish a topic'
    const mockSubscriber = (message: any) => message
    const mockOtherSubscriber = (message: any) => message
    eventBus.subscribe(mockTopic, mockSubscriber)
    eventBus.subscribe(mockTopic, mockOtherSubscriber)
    expect(eventBus.get(mockTopic).size).toEqual(2)
  })

  it('unsubscribe a topic', () => {
    const mockTopic = 'unsubscribe a topic'
    const mockSubscriber = () => 7 + 8
    eventBus.subscribe(mockTopic, mockSubscriber)
    eventBus.unsubscribe(mockTopic)
    expect(eventBus.has(mockTopic)).toBeFalsy()
  })

  it('unsubscribe a subscriber', () => {
    const mockTopic = 'unsubscribe a subscriber'
    const mockSubscriber = () => 9 + 10
    eventBus.subscribe(mockTopic, mockSubscriber)
    eventBus.unsubscribe(mockTopic, mockSubscriber)
    expect(eventBus.has(mockTopic)).toBeTruthy()
    expect(eventBus.get(mockTopic).size).toStrictEqual(0)
  })

  it('throw topic unsubscribing error', () => {
    const mockTopic = 'unsubscribe a error subscriber'
    expect(() => eventBus.unsubscribe(mockTopic)).toThrow()
  })

  it('publish message to subscriber', () => {
    const mockMessage = 'publish a message'
    const mockTopic = 'publish a topic'
    const mockSubscriber = jest.fn((message: any) => message)
    const mockOtherTopic = 'other topic'
    const mockOtherSubscriber = jest.fn((message: any) => message)
    eventBus.subscribe(mockTopic, mockSubscriber)
    eventBus.subscribe(mockOtherTopic, mockOtherSubscriber)
    eventBus.publish(mockTopic, mockMessage)

    expect(mockSubscriber.mock.calls[0][0]).toBe(mockMessage)
    expect(mockOtherSubscriber.mock.calls.length).toStrictEqual(0)
  })

  it('throw topic publishing error', () => {
    const mockTopic = 'publish a error topic'
    const mockMessage = 'publish a error message'
    expect(() => {
      eventBus.publish(mockTopic, mockMessage)
    }).toThrow()
  })
})
