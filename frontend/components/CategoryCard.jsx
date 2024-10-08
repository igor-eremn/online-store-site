import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import './styles/CategoryCard.css';
import { useTheme } from '../src/ThemeProvider';

const CategoryCard = ({ _id, name, description, images }) => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();
  
  const handleCardClick = (e) => {
    navigate(`/home/catalog/${encodeURIComponent(name)}?id=${_id}`);
  };  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={`category-card ${darkMode ? 'dark' : 'light'}`}>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={false}
        arrows={true}
      >
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img  onClick={handleCardClick} src={image} alt={`${name} preview ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div onClick={handleCardClick} className={`category-name ${darkMode ? 'dark' : 'light'}`}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
