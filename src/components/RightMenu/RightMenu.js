import React, { useState } from "react";
import "./RightMenu.css";
import { AiFillClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function RightMenu({ selectedFoods }) {
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
          {selectedFoods.map((food, index) => {
            return (
              <div className="foodItem" key={index}>
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

      <div className="totalAmount">
        <p>Total</p>
        <h5>$15.49</h5>
      </div>

      <div onClick={() => {}} className="checkoutButton">
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default RightMenu;
