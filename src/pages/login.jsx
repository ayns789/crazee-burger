import { useRef, useState } from 'react';

const LoginPage = () => {
  const userRef = useRef();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Bonjour ' + name);
    // setName(null);
    userRef.current.value = '';
    setName('');
  };

  const handleUserInput = (e) => {
    setName(e.target.value);
  };
  //   const onClear = () => {
  //     setName('');
  //   };

  return (
    <>
      <h2>Bienvenue chez nous !</h2>
      <h3>Connectez-vous</h3>
      {/* <div className='inputBtn'> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Entrez votre prénom'
          id='username'
          ref={userRef}
          onChange={handleUserInput}
          required
        />
        <button>Accédez à votre espace</button>
        {/* </div> */}
      </form>
    </>
  );
};

export default LoginPage;
