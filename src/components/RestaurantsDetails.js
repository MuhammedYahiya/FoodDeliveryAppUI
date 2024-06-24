import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantsDetails = () => {
  useEffect(() => {
    fetchRes();
    console.log("useEffect called");
  }, []);
  const { resId } = useParams();
  console.log(resId);
  const [resDetails, setResDetails] = useState(null);

  const fetchRes = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResDetails(json.data);
  };

  if (resDetails === null) return <ShimmerUI />;
  const { name } = resDetails?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h3>Recommended Items</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" "}
              {item.card.info.defaultPrice / 100 ||
                item.card.info.finalPrice / 100 ||
                item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantsDetails;
