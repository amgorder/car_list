import Car from "./Models/Cars.js"
import House from "./Models/Houses.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Chevey", model: "Camaro", price: 75000, imgUrl: 'https://i.pinimg.com/originals/f8/a6/ff/f8a6ffcc174f3243c2fa1c6e631db653.jpg', year: 2021, description: "Its Awesome!", miles: 10})];
 /** @type {House[]} */
  house = [new House({style: "Bungalo", year: 2010, price: 1000, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CEphr7CGY_1wqFW-5TnBQ-p4wbg2AidvfQ&usqp=CAU', description: " Beachy"})];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
