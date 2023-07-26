import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // affichage
  return (
    <>
      <form action='submit' onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous ! </h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
          type='text'
          placeholder='Entrez votre prénom'
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}
