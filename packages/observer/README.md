# Observer pattern

> The observer pattern is a software design pattern in which an object, called the **subject**, maintains a list of its dependents, called **observers**, and notifies them automatically of any state changes, usually by calling one of their methods. It is mainly used to implement **distributed event handling systems**, in "event driven" software.
>
> —— from [Wiki](https://en.wikipedia.org/wiki/Observer_pattern)

- [What problems can the Observer design pattern solve?](https://en.wikipedia.org/wiki/Observer_pattern#What_problems_can_the_Observer_design_pattern_solve?)

  1. A one-to-many dependency between objects should be defined without making the objects tightly coupled.
  1. It should be ensured that when one object changes state an open-ended number of dependent objects are updated automatically.
  1. It should be possible that one object can notify an open-ended number of other objects.

- [What solution does the Observer design pattern describe?](https://en.wikipedia.org/wiki/Observer_pattern#What_solution_does_the_Observer_design_pattern_describe?)

  1. Define Subject and Observer objects.
  1. so that when a subject changes state, all registered observers are notified and updated automatically (and probably asynchronously).

## License

MIT © [Bowen](https://set.sh)
