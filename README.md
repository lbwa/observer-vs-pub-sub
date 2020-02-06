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

## Test

- observer pattern

  ```bash
  yarn test:observer
  ```

- publish-subscribe pattern

  ```bash
  yarn test:pub-sub
  ```

## Acknowledgement

[observer vs pub-sub](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c)

## License

MIT © [Bowen](https://set.sh)
