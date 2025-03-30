import { useEffect } from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../../service/instace";
import { Error } from "../Help/Error";
import { Loading } from "../Help/Loading";
import styles from "./FeedPhotos.module.css";

export const FeedPhotos = () => {

    const { data, loading, error, request } = UseFetch()
    useEffect(() => {
        async function FetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
            const { response, json } = await request(url, options)
            console.log(json);

        }
        FetchPhotos()
    }, [request])


    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}
            </ul>
        );

    else return null
}