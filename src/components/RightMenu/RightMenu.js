import React, { useState } from "react";
import "./RightMenu.css";
import { AiFillClockCircle } from "react-icons/ai";

function RightMenu() {
  const [slectedFoods, setSelectedFoods] = useState([
    {
      foodImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F10%2F22%2Fpasta-and-white-bean-soup.jpg&q=60",
      foodName: "Bean Soup",
      weight: "350g",
      quantity: 1,
      price: 4.2,
      rating: 4.9,
      isSelected: true,
      color:'#c2f8c4'
    },
    {
      foodImage:
        "https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Noodle-Salad-Thumbnail.jpg",
      foodName: "Noodle Salad",
      weight: "300g",
      quantity: 1,
      price: 6.3,
      rating: 4.5,
      isSelected: true,
      color: '#f8e2c0'
    },
    {
      foodImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F10%2F22%2Fpasta-and-white-bean-soup.jpg&q=60",
      foodName: "Roast Potatoes",
      weight: "300g",
      quantity: 1,
      price: 4.99,
      rating: 4.4,
      isSelected: true,
      color: '#faeda6'
    },
  ]);
  return (
    <div className="containerRight">
      <div className="titleContainer">
        <div className="titleText">My Order</div>
        <p className="editButton">Edit</p>
      </div>

      <div className="timeContainer">
        <div className="clockIconContainer">
          <AiFillClockCircle height={15} width={15} color={"#3cc274"} />
        </div>
        <p>11:11 AM</p>
      </div>

      <div className="spacingLine" />

      <div className="selectedFoodsContainer">
        <div className="selectedFoods">
          {slectedFoods.map((food, index) => {
            return (
              <div className="foodItem">
                <div className="row">
                  <img className="foodImage" src={food.foodImage} />
                  <div className="column">
                    <h6 className="foodName">{food.foodName}</h6>
                    <p className="weight">{food.weight}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="qtyContainer">
                    <div className="countActionsButton">-</div>
                    <p className="countActionsButton">{food.quantity}</p>
                    <div className="countActionsButton">+</div>
                  </div>
                  <div className="priceDiv">
                    <h5 className="price">${food.price}</h5>
                    <div className="delete">x</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dragDrop">Drag&Drop</div>

      <div className="totalAmount" >
          <p>Total</p>
          <h5>$15.49</h5>
      </div>

      <div onClick={()=> {}} className="checkoutButton">Checkout</div>
    </div>
  );
}

export default RightMenu;
