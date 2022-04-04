import React from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import { MdPayments } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
  var location = useLocation();
  var selectedFoods = location.state;

  const onDeleteFood = (food, index) => {
    // debugger;
    const foodIndex = selectedFoods.indexOf(food);
    if (foodIndex > -1) {
      selectedFoods[foodIndex].isSelected = false;
      selectedFoods[foodIndex].quantity = 0;
      selectedFoods.splice(foodIndex, 1);
    }
  };
  return (
    <div className="checkoutContainer">
      <LeftMenu
        icon={<MdPayments width={20} height={20} color={"#3cc274"} />}
        text={"CHECKOUT"}
      />

      <div className="selectedFoodsContainer">
        <div className="titleContainer">
          <div className="titleText">My Order</div>
          <p className="editButton">{selectedFoods.length} items</p>
        </div>
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
                    <div
                      onClick={() => onDeleteFood(food, index)}
                      className="delete"
                    >
                      x
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="checkoutButton">Proceed to Payment</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
