import styles from './UserPhotoPost.module.css';
import { Input } from "../Forms/Input";
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { UseFetch } from '../../Hooks/UseFetch';

import { useEffect, useState } from 'react';
import { PHOTO_POST } from '../../../service/instace';
import { Error } from "../Help/Error"
import { useNavigate } from 'react-router-dom';



export const UserPhotoPost = () => {
    const nome = useForm()
    const peso = useForm('number')
    const idade = useForm('number')
    const [img, setImg] = useState({})
    const { data, error, loading, request } = UseFetch()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) navigate('/conta');
    }, [data, navigate])

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append('img', img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', idade.value)

        const token = window.localStorage.getItem('token')
        const { url, options } = PHOTO_POST(formData, token)
        request(url, options)

    }


    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })



    }


    return (<>
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="text" name="peso" {...peso} />
                <Input label="Idade" type="text" name="idade" {...idade} />
                <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
                {loading ? <Button>carregando..</Button> : <Button>Enviar</Button>}
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}>
                    </div>
                )}
            </div>
        </section>

    </>);
}