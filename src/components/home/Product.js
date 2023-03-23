import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useProduct from '../../hooks/useProduct';
import { fetchProducts } from '../../redux/productSlice';
import ProductCard from './ProductCard';

export default function Product() {
  const dispatch = useDispatch();
  const products = useProduct();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="h-[900px] bg-my-green flex flex-col items-center pt-16 text-black">
        <div className="my-16">
          <span className="font-bold text-6xl leading-[82px] tracking-[0.02em]">
            LOREM IPSUM
          </span>
        </div>
        <div className="flex gap-6">
          {products.map((el) => {
            return (
              <ProductCard
                key={el.id}
                id={el.id}
                description={el.description}
                discount={el.discountPercentage}
                price={el.price}
                rating={el.rating}
                stock={el.stock}
                thumbnail={el.thumbnail}
                title={el.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
