export default function TopProducts({products}){
    return (
        <section>
            {products.map(pr=>
                <h1>{pr.name}</h1>
            )}
        </section>
    )
}