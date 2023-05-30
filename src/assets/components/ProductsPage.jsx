import './css/Products.css';
export const ProductsPage = ({ products }) => {    
    return (

        <main className="products-container">
            <ul className='list-products'>
                {products.map(product => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <span>{ product.title}</span>
                            </div>
                        </li>
                ))
                }
            </ul>
        </main>
    )
};