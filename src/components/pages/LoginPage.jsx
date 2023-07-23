import { useState } from 'react';

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Bonjour ${inputValue}`);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action='submit' onSubmit={handleSubmit}>
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
};

export default LoginPage;
