import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import { Category_Preview_Container, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => (
  <Category_Preview_Container>
    <h2>
      <Link to={title}>{title.toUpperCase()}</Link>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </Category_Preview_Container>
);

export default CategoryPreview;