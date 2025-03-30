import { useEffect } from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../../service/instace";
import { Error } from "../Help/Error";


export const FeedPhotos = () => {

    const {data , loading , error, request} = UseFetch()

    useEffect(() => {
        async function FetchPhotos() {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user:0})
           const {response , json} = await request(url, options)
           console.log(json);
           
        }
        FetchPhotos()
    } ,[request])


    if (error) return <Error error={error}/>
    if(loading) return <Loading />
    return ( <>
    
    <div>
        <FeedPhotosItem />
    </div>
    
    </> );
}