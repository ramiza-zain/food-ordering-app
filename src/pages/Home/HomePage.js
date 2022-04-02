import React, { useState } from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import RightMenu from "../../components/RightMenu/RightMenu";
import "./HomePage.css";
import { BsFilter } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

function HomePage() {
  const [foodsList, setFoodsList] = useState([
    {
      foodImage:
        "https://assets.epicurious.com/photos/60886108845eb229a2d41c10/1:1/w_3269,h_3269,c_limit/RedCabbageSlaw_RECIPE_042221_14082.jpg",
      foodName: "Cabage salad",
      weight: "250g",
      quantity: 0,
      price: 4.99,
      rating: 4.2,
      isSelected: false,
      color: "#ddacac",
    },
    {
      foodImage:
        "https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Noodle-Salad-Thumbnail.jpg",
      foodName: "Noodle Salad",
      weight: "300g",
      quantity: 0,
      price: 6.3,
      rating: 4.5,
      isSelected: false,
      color: "#f5b784",
    },
    {
      foodImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgC_QypEU609La-3m66clnzkSbwpXJfvPn4uePeuFrpUO6gogHTUHGnhXu6CO6Phx43U&usqp=CAU",
      foodName: "Vegitable mix",
      weight: "400g",
      quantity: 0,
      price: 5.99,
      rating: 5,
      isSelected: false,
      color: "#89f1db",
    },
    {
      foodImage:
        "https://assets.epicurious.com/photos/54b87c137cbba01c0db7ff8d/master/pass/51248830_cioppino_1x1.jpg",
      foodName: "Seafood soup",
      weight: "350g",
      quantity: 0,
      price: 6.1,
      rating: 4.4,
      isSelected: false,
      color: "#a5c6c7",
    },
    {
      foodImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F10%2F22%2Fpasta-and-white-bean-soup.jpg&q=60",
      foodName: "Bean Soup",
      weight: "350g",
      quantity: 0,
      price: 4.2,
      rating: 4.9,
      isSelected: false,
      color: "#a8e4a8",
    },

    {
      foodImage:
        "https://assets.epicurious.com/photos/5e386d7cede52e00086179bf/1:1/w_3045,h_3045,c_limit/SteamingForDarkDays_RECIPE_013020_203.jpg",
      foodName: "Stewed vegitables",
      weight: "400g",
      quantity: 0,
      price: 4.99,
      rating: 3.9,
      isSelected: false,
      color: "#aad8db",
    },

    {
      foodImage:
        "https://static.toiimg.com/thumb/61575723.cms?imgsize=462719&width=800&height=800",
      foodName: "Chicken soup",
      weight: "350g",
      quantity: 0,
      price: 3.99,
      rating: 4.2,
      isSelected: false,
      color: "#FED7AA",
    },

    {
      foodImage:
        "https://confessionsofabakingqueen.com/wp-content/uploads/2020/05/english-roast-potatoes-on-a-white-plate-on-top-of-a-navy-blue-linen-on-a-grey-surface-1-of-1.jpg",
      foodName: "Roast Potatoes",
      weight: "300g",
      quantity: 0,
      price: 4.99,
      rating: 4.4,
      isSelected: false,
      color: "#f5ed80",
    },
  ]);
  const [selectedFoodList, setSelectedFoodList] = useState([]);
  const onHeartClicked = (food, index) => {
    debugger;
    var list = foodsList;
    var selectedList = selectedFoodList;
    if (list[index].isSelected === false) {
      list[index].isSelected = true;
      list[index].quantity = 1;
      selectedList.push(list[index]);
    } else {
      list[index].isSelected = false;
      list[index].quantity = 0;
      selectedList.pop(list[index]);
    }
    setFoodsList(list);
    setSelectedFoodList(selectedList);
  };

  const onDeleteFood = (food, index) => {};
  return (
    <div className="container">
      <LeftMenu />
      <div className="contentMenu">
        <div className="filterContainer">
          <div className="filterButton">
            <BsFilter />
            <p>Filter</p>
          </div>
        </div>

        <div className="filterContainer">
          <div className="sortContainer">
            <p>Sort by:</p>
            <h5>
              Recommended <BsChevronDown />
            </h5>
          </div>
        </div>

        {/* Foods */}
        <div className="foodsList">
          {foodsList.map((food, index) => {
            return (
              <div
                className="listFoodItem"
                style={{ background: food.color }}
                key={index}
              >
                <div className="ratingHeartContainer">
                  <div className="ratingContainer">
                    <AiFillStar color="#F1C40F" /> {food.rating}
                  </div>
                  <div
                    className="heartContainer"
                    onClick={() => onHeartClicked(food, index)}
                  >
                    {food.isSelected ? (
                      <AiFillHeart color="#d80b0b" width={20} height={20} />
                    ) : (
                      <AiOutlineHeart color="#000" width={20} height={20} />
                    )}
                  </div>
                </div>

                <div className="imageContainer">
                  <img className="imageView" src={food.foodImage} />
                </div>

                <div className="nameWeightDiv">
                  <p c>{food.foodName}</p>
                  <span style={{ color: food.color }}>{food.weight}</span>
                </div>
                <div className="priceStyle">${food.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <RightMenu
        selectedFoods={selectedFoodList}
        onDeleteFood={(food, index) => onDeleteFood(food, index)}
      />
    </div>
  );
}

export default HomePage;
