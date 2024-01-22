import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import Footer from './Components/Footer';
import Logo from './assets/img/netflixLogo.png';
import { useNavigate } from 'react-router-dom'; 
import '../src/CSS/Login.css';

const loginUser = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

function Login() {
  const mutation = useMutation(loginUser);
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await mutation.mutateAsync({ email, password });
      console.log('Successfuly logged');
      navigate('/profile')
      // Successful login, you can handle redirection or any other logic here
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <div className="login">
      <header className="login__header">
        <div className="login__containLogo">
          <img src={Logo} alt="logo netflix" className="login__logo" />
        </div>
      </header>
      <div className="login__containForm">
        <form onSubmit={handleLogin} className="login__form">
          <h3 className="login__formTitle">Ouvrir une session</h3>
          <div className="login__containInput">
            <input name="email" placeholder="Adress Email" type="email" className="login__input" />
            <input name="password" placeholder="Mot de passe" type="password" className="login__input" />
            <button type="submit" className="login__btnSubmit">
              Ouvrir une session
            </button>
          </div>
          <div className="login__metaForm">
            <div className="login__formRemember">
              <input type="checkbox" className="login__checkBox" />
              <label htmlFor="login__checkbox" className="login__labelCheckbox">
                Se souvenir de moi ?
              </label>
            </div>
            <div className="login__fromHelp">
              <a>Besoin d'aide?</a>
            </div>
          </div>
          <div className="login__formSignUp">
            <p className="login__text">
              Première fois sur Netflix? <a className="anchor" href="/">
                Inscrivez-vous maintenant.
              </a>
            </p>
          </div>
          <div className="login__containCaptcha">
            <p className="login__captchaText">
              Cette page est protégée par Google reCAPTCHA pour s'assurer que vous n'êtes pas un robot logiciel.{' '}
              <a className="anchor" href="/">
                En savoir plus.
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="login__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
