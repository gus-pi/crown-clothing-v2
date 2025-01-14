import React from 'react';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer
      to={`shop/${category.title}`}
      className="directory-item-container"
      key={category.id}
    >
      <BackgroundImage $imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <span>Shop Now</span>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
