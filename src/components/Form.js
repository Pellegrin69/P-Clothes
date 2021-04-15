import React from 'react';
import {useForm} from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => props.addArticle(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Titre du produit" name="title" {...register('title')}/>
            <input type="number" placeholder="Prix" name="prix" {...register('prix')}/>
            <input type="select" placeholder="taille" name="taille" {...register('taille')}/>


            <input type="submit"/>
        </form>
    );
};

export default Form;