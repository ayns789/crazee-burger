import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const getInputTextsConfig = (newProduct) => [
  {
    id: '0',
    key: 'title',
    name: 'title',
    type: 'text',
    placeholder: 'Nom du produit (ex: Super Burger)',
    value: newProduct.title,
    Icon: <FaHamburger />,
  },
  {
    id: '1',
    key: 'imageSource',
    name: 'imageSource',
    type: 'text',
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: newProduct.imageSource,
    Icon: <BsFillCameraFill />,
  },
  {
    id: '2',
    key: 'price',
    name: 'price',
    type: 'text',
    placeholder: 'prix',
    value: newProduct.price ? newProduct.price : '',
    Icon: <MdOutlineEuro />,
  },
];
