import React, { useState } from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import { MdPayments } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
  var location = useLocation();
  const [selectedFoods, setSelectedFoods] = useState(location.state);

  const onDeleteFood = (food, index) => {
    // debugger;
    const foodIndex = selectedFoods.indexOf(food);
    if (foodIndex > -1) {
      setSelectedFoods(selectedFoods.splice(foodIndex, 1));
    }
  };
  var totalAmount = selectedFoods.reduce((total, obj) => obj.price + total, 0);

  return (
    <div className="checkoutContainer">
      <LeftMenu
        icon={<MdPayments width={20} height={20} color={"#3cc274"} />}
        text={"CHECKOUT"}
      />

      <div className="selectedFoodsContainerr">
        <div className="titleContainerr">
          <div className="titleTextt">My Order</div>
          <p className="editButtonn">{selectedFoods.length} items</p>
        </div>
        <div className="selectedFoodss">
          {selectedFoods.map((food, index) => {
            return (
              <div className="foodItemm" key={index}>
                <div className="roww">
                  <img className="foodImagee" src={food.foodImage} />
                  <div className="columnn">
                    <h6 className="foodNamee">{food.foodName}</h6>
                    <p className="weightt">{food.weight}</p>
                  </div>
                </div>

                <div className="roww">
                  <div className="qtyContainerr">
                    <div className="countActionsButtonn">-</div>
                    <p className="countActionsButtonn">{food.quantity}</p>
                    <div className="countActionsButtonn">+</div>
                  </div>
                  <div className="priceDivv">
                    <h5 className="pricee">${food.price}</h5>
                    <div
                      onClick={() => onDeleteFood(food, index)}
                      className="deletee"
                    >
                      x
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="totalAmountt">
            <p>Total</p>
            <h5>${totalAmount}</h5>
          </div>
        </div>
        <span className="checkoutButtonn">Proceed to Payment</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
