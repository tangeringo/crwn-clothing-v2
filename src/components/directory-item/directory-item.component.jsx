import { useNavigate } from 'react-router-dom';

import { BG_Image, Body, Directory_Item_Container } from './directory-item.styles';

const CollectionItem = ({ collection }) => {
    const { imageUrl, title, route } = collection;

    const navigate = useNavigate();

    const onCategoryRouteChange = () => navigate(route);
    return (
        <Directory_Item_Container onClick={onCategoryRouteChange}>
        <BG_Image style={{backgroundImage: `url(${imageUrl})` }}/>
        <Body>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Body>
      </Directory_Item_Container>
    );
}

export default CollectionItem;