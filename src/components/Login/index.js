import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'

const Login = (props) => {
    const firebase = useContext(FirebaseContext); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [btn, setBtn] = useState(false);

    useEffect(()=>{
        if (password.length > 5 && email !== '' ) {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])
    
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
        .then( user => {
            console.log(user)
            setEmail('');
            setPassword('');
            props.history.push('/welcome');
        })
        .catch(error => {
            setEmail('');
            setPassword('');
            setError(error);
        })
    }
     const errorMsg = error !== '' && <span>{error.message}</span>

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                    {errorMsg}
                    <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="inputBox">
                                <input onChange={handleEmail} value={email} type="mail" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className="inputBox">
                                <input onChange={handlePassword} value={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>

                            </div>

                            {btn ? (<button>Connexion</button>) : (<button disabled>Connexion</button>)}
                            
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié ? Récupérer votre mot de passe</Link>
                        </div>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Pas encore de compte ? Inscrivez vous d'abord</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )

}
export default Login