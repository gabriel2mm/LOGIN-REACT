import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../Contexts'

function LoginPage() {
    const [loginError, setLoginError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const userContext = useContext(UserContext);

    async function handleFormSubmit() {
        const response = await userContext.signIn(email, password);
        if (!response) {
            setLoginError("Não foi possível validar suas credenciais! Tente novamente mais tarde");
        }
    }

    return (
        <>
            {loginError ? (<span className="erroLogin">{loginError}</span>) : (null)}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input type="text" name="email" placeholder="email" value={email} ref={register({ required: true })} onChange={e => setEmail(e.target.value)} />
                {errors.email && (<span className="erros">Campo inválido! Tente novamente.</span>)}
                <input type="text" name="password" placeholder="password" value={password} ref={register({ required: true })} onChange={e => setPassword(e.target.value)} />
                {errors.password && (<span className="erros">Campo inválido! Tente novamente.</span>)}
                <input type="submit" name="entrar" value="Entrar" />
            </form>
        </>
    )
}

export default LoginPage;