import { ProxyState } from "../AppState.js";
import House from "../Models/Houses.js";

class HousesService{

 
  constructor(){
    console.log("houses service");
  }

  createHouse(rawHouse) {
  //  let newCar = new Car(rawCar)
  //  console.log(newCar)
  //  ProxyState.cars = [...ProxyState.cars, newCar]

    let temp = ProxyState.house
    temp.push(new House(rawHouse))
    ProxyState.house = temp

  }

  bid(id) {
    let temp = ProxyState.house
    let house = temp.find(c=> c.id === id)
    house.price += 100
    ProxyState.house = temp
  }

  deleteHouse(id) {
    let temp = ProxyState.house
    let houseIndex = temp.findIndex(house =>  house.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.house = temp
  }
}
export const housesService = new HousesService()