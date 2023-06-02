import { useState } from 'react';
import './css/Home.css';

export const HomPage = () => {
    const images = ['product1.jpg','product2.jpg','product3.jpg','product4.jpg','samsung.jpg'];
    const [indexImg, setIndeximg] = useState(0);
    const [imgSelect, setImgSelect] = useState(images[0]);

    const previous = () => {
        const flag = indexImg > 0;
        const nextIndex = flag ? indexImg - 1 : images.length - 1;
        setImgSelect(images[nextIndex]);
        setIndeximg(nextIndex);
    }

    const nextImg = () => {
        const flag = indexImg < images.length -1;
        const nextIndex = flag ? indexImg + 1 : 0; 
        setImgSelect(images[nextIndex]);
        setIndeximg(nextIndex);
    } 
    return (
        <main className="home-container">
            <section className="image-section">
                
            </section>
            <section className="images-section"> 
                
                    <button onClick={previous}>{'<'}</button>
                    <img src={`bit02spa/src/assets/components/images/${imgSelect}`} alt="image_products" />
                    <button onClick={nextImg}>{'>'}</button>

            </section>
        </main>
    );
};