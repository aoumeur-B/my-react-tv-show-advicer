import s from "./style.module.css";
import {StarFill,StarHalf,Star as StarEmpty} from "react-bootstrap-icons";

export function FiveStarsRating({rating}){
	const starsList = [];
	const fullStar = Math.floor(rating);
	const hasHalfStar = rating - fullStar >= 0.5;
	const emptyStars = 5 - fullStar - (hasHalfStar ? 1 : 0);

	for(let i = 1; i <= fullStar; i++){
		starsList.push(<StarFill key={"star-fill"+i}/>)
	}
	if(hasHalfStar){
		starsList.push(<StarHalf key={"star-half"}/>)
	}
	for(let i = 1; i <= emptyStars; i++){
		starsList.push(<StarEmpty key={"star-empty"+i}/>)
	}

	return <div> {starsList} </div>
}
