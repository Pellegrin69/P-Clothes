import React from 'react';
import {useForm} from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => props.addArticle(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" name="name" ref={register({required: true, maxLength: 80})}/>
            <input type="number" placeholder="Age" name="age"
                   ref={register({required: true, minLength: 1, maxLength: 3})}/>
            <input type="tel" placeholder="Mobile number" name="numero"
                   ref={register({required: true, minLength: 6, maxLength: 12})}/>


            <input type="submit"/>
        </form>
    );
};

export default Form;