import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../directory/directory.component';

import { BG_Image, Body, Directory_Item_Container } from './directory-item.styles';

type DirectoryItemProps = {
  directory: DirectoryCategory
}

const DirectoryItem: FC<DirectoryItemProps> = ({ directory }) => {
    const { imageUrl, title, route } = directory;

    const navigate = useNavigate();

    const onCategoryRouteChange = () => navigate(route);
    return (
        <Directory_Item_Container onClick={onCategoryRouteChange}>
        <BG_Image imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Body>
      </Directory_Item_Container>
    );
}

export default DirectoryItem;