import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  // console.log('productSelected : ', productSelected);
  return <span>{productSelected && productSelected.title}</span>;
}
