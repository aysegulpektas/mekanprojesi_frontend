import { Injectable } from "@angular/core";
import { CartItem } from "../models/cartItem";
import { CartItems } from "../models/cartItems";
import { Place } from "../models/place";




@Injectable({
  providedIn:'root'
})

export class CartService {
  constructor(){}


  addToCar(place:Place){
    let item =CartItems.find(c=> c.place.placeId===place.placeId);
    if(item){
      item.quantity+=1;
    }else {
      let cartItem= new CartItem();
      cartItem.quantity=1;

      CartItems.push(cartItem)

    }
  }
  
  removeFromCart(place:Place){
    let item:CartItem=CartItems.find(c=>c.place.placeId===place.placeId);
    CartItems.splice(CartItems.indexOf(item),1);
  }


  list():CartItem[]{
    return CartItems;
  }
}