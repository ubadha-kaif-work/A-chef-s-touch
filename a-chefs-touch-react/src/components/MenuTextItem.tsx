import React from 'react';

interface MenuTextItemProps {
    title: string;
    price: string;
}

const MenuTextItem: React.FC<MenuTextItemProps> = ({ title, price }) => {
    return (
        <div className="menu-item-text-only">
            <div className="item-header">
                <h4 className="item-title">{title}</h4>
                <span className="item-price">{price}</span>
            </div>
            <div className="item-dots"></div>
        </div>
    );
};

export default MenuTextItem;
