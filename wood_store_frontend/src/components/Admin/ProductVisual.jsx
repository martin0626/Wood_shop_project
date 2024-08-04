import classes from './ProductVisual.module.css';


export default function ProductVisualComp({product}){
    

    const testImages = [
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
    ];

    return (
        <section className={classes.visualSection}>

            {
                product
                ?
                    <div className={classes.produDet}>
                        <div className={classes.prodAction}>
                            <button className='defaultBtn'>Edit</button>
                            <button className='defaultBtn'>Delete</button>
                        </div>
                        <div className={classes.prodContent}>
                            <h2>Title: {product.name}</h2>
                            <h2>Description: {product.description}</h2>
                            <h2>Main Image:</h2>
                            <div className={classes.mainImage}>
                                <img src="https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg" />

                            </div>
                            <h2>Gallery:</h2>
                            <div className={classes.imagesAdmin}>
                                

                                {testImages.map((img, index) => (
                                    <div className={classes.singleImg}  key={index}>
                                        <img src={img}/>
                                    </div>
                                ))}
                            </div>               
                        </div>
                    </div>
                    
                :
                    <h1>No product Selected</h1>
            }
        </section>
    )
}