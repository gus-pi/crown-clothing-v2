import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import ProductCard from '../components/product-card/product-card.components';

const Category = () => {
  const params = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[params.category]);

  useEffect(() => {
    setProducts(categoriesMap[params.category]);
  }, [params.category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
