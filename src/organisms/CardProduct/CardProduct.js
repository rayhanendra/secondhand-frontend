import BaseCard from 'components/atoms/BaseCard/BaseCard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from 'store/slices/product';
import uuid from 'utils/uuid';

function CardProduct() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="row">
      {products?.map((item) => (
        <div key={uuid()} className="col-6 col-sm-4 col-md-3 col-lg-2 g-3">
          <BaseCard
            item={item}
            onClick={() => {
              router.push(`/buyer/halaman-produk/${item.id}`);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
