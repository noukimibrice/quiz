import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase';

const ForgetPassword = props => {

    const firebase = useContext(FirebaseContext)
    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
   
    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError('');
            setSuccess(`Consultez votre email ${email} pour changer votre mot de passe`);
            setEmail('');
            setTimeout(() => {
                props.history.push('/login');
            }, 5000);
        })
        .catch(error => {
            setError(error);
            setEmail('');
        })

    }

    const handleEmail = e => {
        setEmail(e.target.value);
       
    }

    const disabled = email === '';
    
    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup"></div>
                <div className="formBoxRight">
                    <div className="formContent">

                    {success && <span style={{
                        border: "1px solid green",
                        background: "green",
                        color: "#ffffff"
                    }}>{success}</span>}

                    {error && <span style={{
                        border: "1px solid red",
                        background: "red",
                        color: "#ffffff"
                    }}>{error.message}</span>}

                    <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="inputBox">
                                <input onChange={handleEmail} value={email} type="mail" autoComplete="off" required />
                                <label htmlFor="email">Email</label>

                            </div>
                            <button disabled={disabled}>Récupérer</button>
                            
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Déjà inscrit ? connectez-vous</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default ForgetPassword