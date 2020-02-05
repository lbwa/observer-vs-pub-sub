import { Observer } from '../src'

describe('observer pattern', () => {
  it('create a observer', () => {
    const observer = new Observer()
    expect(observer).toBeDefined()
  })
})
