import classes from './DetailsDescription.module.css'

export default function DetailsDescription({product}){
    return(
        <div className={classes.description}>
            <h1 className={classes.mainDescriptionText}>{product.description}</h1>
            <div className={classes.detailsPrice}>
                <a>Price: </a><a className={classes.mainDescriptionText}>{product.price}</a><a style={{color: '#fff'}}>BGN</a>
            </div>
            <div className={classes.detailsSize}>
                <a>Size: </a>
                <a className={classes.mainDescriptionText}>{product.width} X {product.height}</a>
                {/* <p>{product.width} X {product.height}</p> */}
            </div>
            <div className={classes.detailsSize}>
                <a>Weight: </a>
                <a className={classes.mainDescriptionText}>{product.weight}</a> <a style={{color: '#fff'}}>KG</a>
                {/* <p>{product.width} X {product.height}</p> */}
            </div>
            
            <div className={classes.detailQuantity}>
                <a>Quantity:</a> 
                
                <a>
                    <i  className="material-icons" style={
                        {color: '#333', 'font-size': '3rem', 'font-weight': 'bold', 'background-color': '#fcc419', 'border-radius': '6px'}
                    }>remove</i>
                </a>
                <a className={classes.mainDescriptionText}>1</a>
                <a>
                    <i className="material-icons" style={
                            {color: '#333', 'font-size': '3rem', 'font-weight': 'bold', 'background-color': '#fcc419', 'border-radius': '6px'}}
                    >add</i>
                </a>
            </div>
            <div className={classes.detailsBtnGr}>
                <button>Add to cart</button>
                <button>Buy</button>
            </div>
        </div>
    )
}