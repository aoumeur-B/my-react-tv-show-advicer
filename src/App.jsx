import "./global.css";
import s from "./style.module.css";
import {TvShowAPI} from "./api/tv.show";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config";
import {TvShowDetail} from "./components/tvShowDetail/TvShowDetail";
import {Logo} from "./components/logo/Logo";
import logo from "./assets/images/logo.png";
import {TvShowListHolder} from "./components/tvShowListHolder/TvShowListHolder";
import {SearchBar} from "./components/searchBar/SearchBar";


export function App() {

    const [currentFilm, setCurrentFilm] = useState({});
    const [recommendationsList, setRecommendationsList] = useState([]);

    async function fetchPopularFilm(){
        const response =  await TvShowAPI.fetchPoupular();
        if(response.length > 0){
            setCurrentFilm(response[0]);
        }
    }


    async function fetchRecommendations(tvShwoId){
        if(tvShwoId){
            const response = await TvShowAPI.fetchRecommendations(tvShwoId);

            if(response.length > 0){
                setRecommendationsList(response.slice(0,10));
            }
        }
    }

    async function onSubmit(title){
        const response = await TvShowAPI.fetchByTitle(title);
        if(response.length > 0){
            setCurrentFilm(response[0]);
        }
    }

    function setTvShowFromRecommandations(tvShwo){
        setCurrentFilm(tvShwo);
    }

    useEffect(()=>{
        fetchPopularFilm();
    },[])

    useEffect(()=>{
        if(currentFilm){
            fetchRecommendations(currentFilm.id);
        }
    },[currentFilm])




    return <div className={s.main_container}
                style={{background: currentFilm
                        ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}/${currentFilm.backdrop_path}") no-repeat center/cover`
                        : "black"
                    }} >
        <div className={s.header}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <Logo image={logo} title={"What to watch"} subTitle={"Find a show you my like !"}/>
                </div>
                <div className={"col-sm-12 col-md-4"}>
                    <SearchBar onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
            {currentFilm && <TvShowDetail tvShow={currentFilm}/>}
        </div>
        <div className={s.recommandations}>
            <TvShowListHolder tvShowList={recommendationsList} onClick={setTvShowFromRecommandations} />
        </div>
        </div>;
}
