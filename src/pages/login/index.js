import React, { useState } from "react";
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import Message from "../../components/UI/Message/Message";
import TitlePage from "../../components/UI/Title/TitlePage";
import Input from "../../components/UI/Input/Input";
import styles from "../register/index.module.scss";


const Index = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
            .then(data => {
                if (data.message) {
                    setError(true);
                    setErrorMessage(data.message);
                    return false;
                }
                localStorage.setItem("token", data.token);
                router.push("/account/profil");

            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
            });
    }
    return (
        <div>
            <TitlePage title="Login" />
            <p className="text-center">
                Connectez vous à votre profil
            </p>
            <form className={styles.form__register} onSubmit={(e) => handleSubmit(e)}>

                <Input
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Mon email"
                    required={true}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <Input
                    type="password"
                    label="Mot de passe"
                    id="password"
                    name="password"
                    placeholder="Mon mot de passe"
                    required={true}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />
                <input className="btn btn-black" type="submit" value="Me Connecter" />

                {
                    error ? (
                        <Message message={errorMessage} type="error" />
                    )
                        :
                        ""
                }

            </form>
        </div>
    )
}

export default Index;
