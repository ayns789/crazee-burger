import styled from 'styled-components';

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className='image-preview'>Image Preview</div>
      <div className='input-fields'>
        <input type='text' placeholder='Nom du produit' />
        <input type='text' placeholder='image url' />
        <input type='text' placeholder='price' />
      </div>
      <div className='submit-button'>
        <button>Submit button</button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  .image-preview {
    background: lightcoral;
    // surface, on commence toujours par ligne, puis colonne:
    // début ligne 1 / colonne 1, fin ligne 4 / colonne 2
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields {
    background: lightblue;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .submit-button {
    background: lightgreen;
    grid-area: 4/ 2 / 5 / 3;

    display: grid;
    width: 40%;
  }
`;
