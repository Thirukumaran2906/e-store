import React from 'react'
import "./menu.css"
import { useEffect ,useState} from 'react';
import MenuCard from './MenuCard';
import cofeeBuscuit from '../item/cofeeBuscuit.jpg'
import creamyCofee from '../item/cremy-cofee.jpg'
import hotCreamCofee from '../item/hot cream-coffee.jpg'
import HotChocoCoffee from '../item/hot-choco-cofee.jpg'
import iceCoffee from '../item/ice-coffee.jpg'
import packedCoffee from '../item/paked-cofee.jpg'
import puffyCoffee from '../item/puffy-choco-coffee.jpg'
import NormalCoffee from '../item/water-cofee.jpg'
import ChocoJellyCake from '../item/cake.jpg';
import Brownie from '../item/brownie.jpg';
import ChocoFills from '../item/choco-fills.jpg';
import CupCake from '../item/cupCake.jpg';
import Donut from '../item/donut.jpg';
import PineCake from '../item/pulpCake.jpg';
import ChickenRoll from '../item/chicken-roll.jpg';
import SandWich from '../item/sandwich.avif';
import MilkShakes from '../item/jarShake.jpg';
import StrawberryShake from '../item/strawberry-milkshake.jpg';
import PlainBread from '../item/plain-bun.jpg';
import Rusk from '../item/rusk.jpg';
import oreo from '../item/oreo.jpg'

const Menu = () => {
  const items =[
    {id:1,image:cofeeBuscuit,name:"Cappuccino",price:320, Total: 320, quantity: 1},
    {id:2,image: creamyCofee, name: 'Creamy-coffee ', price: 220, Total: 220, quantity: 1},
    {id:3, image: hotCreamCofee, name: 'Hot Cremy Coffee', price: 200, Total: 200, quantity: 1},
    {id:4,image: HotChocoCoffee, name: 'Choco Coffee', price: 320, Total: 320, quantity: 1},
    {id:5,image:iceCoffee,name:"Ice Coffee",price:190, Total: 190, quantity: 1},
    {id:6,image:packedCoffee,name:"Flavoured Coffee",price:180, Total: 180, quantity: 1},
    {id:7,image:puffyCoffee,name:"Snow flav Coffee",price:250, Total: 250, quantity: 1},
    {id:8,image:NormalCoffee,name:"Normal Coffee",price:120, Total: 120, quantity: 1},
  ];
  const snacks = [
    {id: 9, image: ChocoJellyCake, name: "Choco-JellyCake", price: 250, Total: 250, quantity: 1},
    {id: 10, image: Brownie, name: 'Brownie', price: 140, Total: 140, quantity: 1},
    {id: 11, image: ChocoFills, name: 'ChocoFills', price: 100, Total: 100, quantity: 1},
    {id: 12, image: CupCake, name: 'CupCake', price: 100, Total: 100, quantity: 1},
    {id: 13, image: Donut, name: "Donut", price: 190, Total: 190, quantity: 1},
    {id: 14, image: PineCake, name: "PineCake", price: 120, Total: 120, quantity: 1},
    {id: 15, image: ChickenRoll, name: "Chicken roll", price: 80, Total: 80, quantity: 1},
    {id: 16, image: SandWich, name: "SandWich", price: 140, Total: 140, quantity: 1},
    {id: 17, image: MilkShakes, name: "MilkShakes", price: 210, Total: 210, quantity: 1},
    {id: 18, image: StrawberryShake, name: "Strawberry Shake", price: 210, Total: 210, quantity: 1},
    {id: 19, image: PlainBread, name: "Plain Bread", price: 60, Total: 60, quantity: 1},
    {id: 20, image: Rusk, name: "Rusk", price: 70, Total: 70, quantity: 1},
    {id:21 ,image :oreo,name :"oreo",price:190,Total:250,quantity:1}
];
const [coffees, setCoffees] = useState(null);
const [fetchSnaks, setFetchSnaks] = useState(null);
useEffect(()=>{
  if(!coffees)
  {
    const coffeeElements = items.map((item) => <MenuCard key={item.id} item={item} itrArray={items}/>);
    setCoffees(coffeeElements);
  }
  if(!fetchSnaks) 
  {
    const snackElements = snacks.map((snak) => <MenuCard key={snak.id} item={snak} itrArray={snacks}/>);
    setFetchSnaks(snackElements);
  }
},[coffees, fetchSnaks,items,snacks]); 

  return (
    <section className='menus'>
    <section className="top-order-header">
        <a href="#box" className="choose" id="cart-p">Coffee</a>
        <a href="#box2" className="choose">Snaks</a>
    </section>
    <section className="mid-header">
        <h1>Coffee</h1>
        <h3>drink now and have a great day</h3>
     </section>
    <section className="main-order">
         <section className="box" id="box">
         {coffees}
         </section>
         <section className="mid-header">
            <h1>Snaks | Bites |  Drinks</h1>
            <h3>Tasty With Satisfaction</h3>
         </section>
         <section className="box2" id="box2">
        {fetchSnaks}
         </section>
    </section>
    </section>
  )
}
export default Menu;
