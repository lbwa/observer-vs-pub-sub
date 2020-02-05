import { Subject } from '../src'

describe('Subject', () => {
  it('create a subject', () => {
    const subject = new Subject()
    expect(subject).toBeDefined()
    expect(subject.register).toBeDefined()
    expect(subject.unregister).toBeDefined()
    expect(subject.notify).toBeDefined()
  })

  it('register a observer', () => {
    const subject = new Subject()
    const mockObserver = () => 1 + 1
    subject.register(mockObserver)
    expect(subject.has(mockObserver)).toBeTruthy()
  })

  it('unregister a observer', () => {
    const subject = new Subject()
    const mockObserver = () => 1 + 1
    subject.register(mockObserver)
    subject.unregister(mockObserver)
    expect(subject.has(mockObserver)).toBeFalsy()
  })

  it('notify all observer once or multiple times', () => {
    const subject = new Subject()
    const mockObserver = jest.fn((message: any) => message)
    const mockOtherObserver = jest.fn((message: any) => message)
    const firstMessage = 'first message'
    const secondMessage = 'second message'
    subject.register(mockObserver)
    subject.register(mockOtherObserver)
    subject.notify(firstMessage)
    expect(mockObserver).toBeCalledTimes(1)
    expect(mockOtherObserver).toBeCalledTimes(1)
    expect(mockObserver.mock.calls[0][0]).toBe(firstMessage)
    expect(mockOtherObserver.mock.calls[0][0]).toBe(firstMessage)

    subject.notify(secondMessage)
    expect(mockObserver).toBeCalledTimes(2)
    expect(mockOtherObserver).toBeCalledTimes(2)
    expect(mockObserver.mock.calls[1][0]).toBe(secondMessage)
    expect(mockOtherObserver.mock.calls[1][0]).toBe(secondMessage)
  })
})
