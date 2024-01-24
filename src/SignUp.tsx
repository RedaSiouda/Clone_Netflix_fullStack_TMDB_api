import './CSS/SignUp.css';
import Footer from '../src/Components/Footer';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom'; 
import Logo from './assets/img/netflixLogo.png';
import axios from 'axios';

const createUser = async ({ email, username, password }: { email: string; username: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/create&new&user', {
      email,
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Create user failed');
  }
};

function SignUp() {
  const navigate = useNavigate();
  const mutation = useMutation(createUser);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;

    try {
      await mutation.mutateAsync({ email, password, username });
      console.log('New user created');
      navigate('/login');
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  };

  return (
    <div className="signUp">
      <header className="signUp__header">
        <div className="signUp__containLogo">
          <img src={Logo} alt="" className="signUp__logo" />
        </div>
      </header>
      <div className="signUp__containForm">
        <form onSubmit={handleSignUp} className="signUp__form">
          <h3 className="signUp__title">Créer votre compte</h3>
          <div className="signUp__containInput">
            <input placeholder='Email adress' name="email" required type="email" className="signUp__input" />
            <input placeholder='username Wanted' name="username" required type="text" className="signUp__input" />
            <input placeholder='password' name="password" required type="password" className="signUp__input" />
            <button type="submit" className="signUp__btnSubmit">
              Inscription
            </button>
          </div>
        </form>
      </div>
        <div className="signUp__footer">
          <Footer />
        </div>
    </div>
  );
}

export default SignUp;

