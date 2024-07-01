import { productsActions } from "./products-slice";
        
const productAPIMapper = {
    'products': 'http://localhost:8000/api/products',
    'priceAsc': 'http://localhost:8000/api/products/sort/price/asc',
    'priceDesc': 'http://localhost:8000/api/products/sort/price/desc',
}


async function fetchProducts(dispatch, url){
    
        async function loadProducts(){
            const response = await fetch(url);
            
            if(!response.ok){
                throw json(
                    {message: "Could not fetch products."},
                    {
                        status: 500,
                    }
                );
            }
            const data = await response.json();
            return data;
        };

        try{
            const prodData = await loadProducts();  
            dispatch(productsActions.replaceProducts({products: prodData}));
        }catch(err){
            //TODO UI Message for errors and others 
            return [
                {id: 1, name: 'Test', price: 222.22, image: 'https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg'}, 
                {id: 2, name: 'Test 2', price: 222.22, image: 'https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg'}, 
                {id: 3, name: 'Test 3', price: 222.22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s'}
            ];
        }
}

export function loadAllProducts(){
    const url = productAPIMapper['products'];
    return async (dispatch)=>{
        fetchProducts(dispatch, url);
    }
};

export function loadPriceAscProducts(){
    const url = productAPIMapper['priceAsc'];
    return async (dispatch)=>{
        fetchProducts(dispatch, url);
    }
};

export function loadPriceDescProducts(){
    const url = productAPIMapper['priceDesc'];
    return async (dispatch)=>{
        fetchProducts(dispatch, url);
    }
};

export function loadFilterProducts(filter){
    let url = 'http://localhost:8000/api/products/'

    Object.keys(filter).forEach(key => {
        url = url + `?${key}=${filter[key]}`
    });

    console.log(url);
    return async (dispatch)=>{
        fetchProducts(dispatch, 'priceDesc');
    }
}