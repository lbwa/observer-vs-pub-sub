<h1 align="center">Observer vs Pub-Sub pattern</h1>

<p align="center">
  <a href="https://github.com/lbwa/observer-vs-pub-sub/actions">
    <img alt="unit tests" src="https://github.com/lbwa/observer-vs-pub-sub/workflows/Unit%20tests/badge.svg">
  </a>
</p>

> Differences between [observer pattern][wiki-observer-pattern] and [publish-subscribe pattern][wiki-publish-subscribe-pattern].

[wiki-observer-pattern]: https://en.wikipedia.org/wiki/Observer_pattern
[wiki-publish-subscribe-pattern]: https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern

## Includes

This repository has included 2 kinds of design patterns in the `/packages` directory.

1. [Observer pattern](./packages/observer)

1. [Publish-Subscribe pattern](./packages/pub-sub)

### Differences

1. In the Observer pattern, the Observers are aware of the Subject, also the Subject maintains a record of the Observers. Whereas, in Publisher/Subscriber, publishers and subscribers don’t need to know each other. They simply communicate with the help of message queues or broker.
2. In Publisher/Subscriber pattern, components are loosely coupled as opposed to Observer pattern.
   Observer pattern is mostly implemented in a synchronous way, i.e. the Subject calls the appropriate method of all its observers when some event occurs. The Publisher/Subscriber pattern is mostly implemented in an asynchronous way (using message queue).
3. Observer pattern needs to be implemented in a single application address space. On the other hand, the Publisher/Subscriber pattern is more of a cross-application pattern.

## Test

- Run all tests

  ```bash
  yarn test
  ```

- Observer pattern

  ```bash
  yarn test:observer
  ```

- Publish-subscribe pattern

  ```bash
  yarn test:pub-sub
  ```

## Acknowledgement

1. [hackernoon - observer vs pub-sub](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c)
1. [stackoverflow - Difference between Observer, Pub/Sub, and Data Binding](https://stackoverflow.com/questions/15594905/difference-between-observer-pub-sub-and-data-binding)
1. [Addy Osmani - Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

## License

MIT © [Bowen](https://set.sh)
