
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsDetails = () => {
  const { resId } = useParams();

  const resDetails = useRestaurantMenu(resId);
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
