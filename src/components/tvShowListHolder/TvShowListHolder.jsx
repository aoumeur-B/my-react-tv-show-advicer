import s from "./style.module.css";
import {TvShowListItem} from "../tvShowListItem/TvShowListItem";

export function TvShowListHolder({tvShowList, onClick}) {
	return <>
		<div className={s.title}>You may alos like :</div>
		<div className={s.items_list}>
			{tvShowList.map((item) => <span key={item.id} className={s.item}> <TvShowListItem tvShow={item} onClick={onClick}/></span>)}
		</div>
	</>
}

