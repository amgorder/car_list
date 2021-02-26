import {generateId} from "../Utils/GenerateId.js"

export default class House{
constructor({style, year, price, description, imgUrl}){
  this.style = style
  this.year = year
  this.price = price
  this.description = description
  this.imgUrl = imgUrl
  this.id = generateId()
  
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.style}</h4>
      <h3 class="card-title">${this.year}</h3>
      <p class="card-text">${this.description}</p>
      <p>Price: ${this.price}</p>
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}

}