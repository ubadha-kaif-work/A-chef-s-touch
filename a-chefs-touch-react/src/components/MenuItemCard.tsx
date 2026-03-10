import React from 'react';

interface MenuItemCardProps {
    imageSrc: string;
    imageAlt: string;
    price: string;
    title: string;
    description: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ imageSrc, imageAlt, price, title, description }) => {
    return (
        <div className="menu-item-card">
            <div className="menu-img-wrapper">
                <img src={imageSrc} alt={imageAlt} className="menu-img" />
                <span className="price-tag">{price}</span>
            </div>
            <div className="menu-content">
                <h4 className="item-title">{title}</h4>
                <p className="item-desc">{description}</p>
            </div>
        </div>
    );
};

export default MenuItemCard;
