import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesServices.js"

  function _draw(){
    let house = ProxyState.house
    let template = ""
    house.forEach(house=> template += house.Template)
    // console.log(template)
    document.getElementById('house').innerHTML = template
    console.log(ProxyState.house)
  }

export default class HouseController{
  constructor(){
    console.log("houses controller working")
    console.log(ProxyState.house)
    _draw()
    ProxyState.on("house", _draw)
  }

  createHouse(event){
    event.preventDefault();
    console.log('creating house')
    let form = event.target
    console.log(form)
    let rawHouse = {
      style: form.style.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    console.log(rawHouse)
    housesService.createHouse(rawHouse)
  }

  bid(id){
    console.log('bidding ' + id)
    housesService.bid(id)
  }

  deleteHouse(id){
    console.log(id)
    housesService.deleteHouse(id)
  }

}