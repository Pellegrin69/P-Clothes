import React from 'react';
import {useForm} from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => props.addArticle(data);

    

    return (
        <div id="formulaire">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Titre du produit" name="title" {...register('title')}/>
                <br/>
                <input type="number" placeholder="Prix" name="prix" {...register('prix')}/>
                <br/>
                <select placeholder="taille" name="taille" {...register('taille')}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <input type="file" name="photo" {...register('photo')} accept="image/*"/>


                <input type="submit"/>
            </form>
        </div>
    );
};

export default Form;