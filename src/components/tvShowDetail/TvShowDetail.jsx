import s from "./style.module.css";
import {FiveStarsRating} from "../fiveStarsRating/FiveStarsRating";

export function TvShowDetail({tvShow}){
	const rating = tvShow.vote_average/2;

	return <div>
	            <div className={s.title}> {tvShow.name}</div>
				<div className={s.rating_container}>
					<FiveStarsRating rating={rating}/>
	                <div className={s.rating}> {rating}</div>
				</div>
	            <div className={s.overview}> {tvShow.overview}</div>
			</div>
}
