
export const Store = ({store}) => {
    return (
        <ul className='container-items'>
            {
                store.map(element => (
                        <article className='item' key={element.id}>
                            <figure>
						        <img src={element.thumbnail} alt={element.title} />
                        </figure>
                        <div className='info-product'>
                            <span>{element.title}</span>
                            <span>Precio $ {element.price}</span>
                            <span>Categoría: {element.category}</span>
                            <span>Calificación: {element.rating}/5</span>
                        </div>
                        </article>
                ))
            }
        </ul>
    );
}