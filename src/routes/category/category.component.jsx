import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.components';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const params = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
