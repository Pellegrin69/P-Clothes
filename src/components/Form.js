import React from 'react';
import {useForm} from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => props.addArticle(data);


    return (
        <div id="formulaire">
            <h3>Souhaitez-vous ajouter un article ?</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Titre du produit" name="title" required{...register('title')}/>
                <br/>
                <input type="number" placeholder="Prix" name="prix" required {...register('prix')}/>
                <br/>
                <select placeholder="taille" name="taille" {...register('taille')}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <input type="file" name="photo" {...register('photo')} accept="image/*"/>
                <br/>
                <input type="submit" id="boutonSubmit"/>
            </form>
        </div>
    );
};

export default Form;