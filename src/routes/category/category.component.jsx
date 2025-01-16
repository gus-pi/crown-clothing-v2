import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.components';
import { CategoryContainer, Title } from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const params = useParams();

  const [products, setProducts] = useState(categoriesMap[params.category]);

  useEffect(() => {
    setProducts(categoriesMap[params.category]);
  }, [params.category, categoriesMap]);

  return (
    <>
      <Title>{params.category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
