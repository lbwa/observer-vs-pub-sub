/**
 * @further https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
 */

/**
 * @note how to solve `TypeError: Constructor Set requires 'new'` error ?
 * @reason typescript would not convert any ES6 above version features to ES5
 * @solution set compilerOptions.target to above version, eg. **es6/es2015**
 * @details https://github.com/microsoft/TypeScript/issues/10853#issuecomment-338176699
 */
/**
 * @observer
 * @duty a list of objects depends on Subject
 * use built-it Set object to prevent duplicate observer.
 */
class Observers extends Set {}

/**
 * @subject
 * @duty maintain a list of observers, facilitates adding or deleting observers.
 */
export class Subject {
  private observers = new Observers()

  register(observer: Function) {
    return this.observers.add(observer)
  }

  unregister(observer: Function) {
    return this.observers.delete(observer)
  }

  has(observer: Function) {
    return this.observers.has(observer)
  }

  // Subject broadcasts a notification to the observers
  notify(message: any) {
    this.observers.forEach(observer => observer(message))
  }
}
