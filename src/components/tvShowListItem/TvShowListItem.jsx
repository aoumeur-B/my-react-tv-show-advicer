import s from "./sytle.module.css";
import {SMALL_IMG_BASE_URL} from "../../config";


export function TvShowListItem({tvShow, onClick}){
	return <div  onClick={()=> onClick(tvShow)} className={s.container}>
				<img className={s.img} alt={tvShow.name} src={SMALL_IMG_BASE_URL+tvShow.backdrop_path}/>
				<div className={s.title}>
					{tvShow.name}
				</div>
		</div>
}
