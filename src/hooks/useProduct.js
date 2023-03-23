import { useSelector } from 'react-redux';

export default function useProduct() {
  return useSelector((state) => state.product.products);
}
