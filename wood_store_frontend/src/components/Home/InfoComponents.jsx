import InfoElementLeft from "./HomeInfoLeft"
import InfoElementRight from "./HomeInfoRight"

export default function InfoComponents(){

    const myInitialInfoElements = [
        {
            img: 'https://cdn.hswstatic.com/gif/wood-furniture-shop.jpg', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab officia sit. Laborum itaque praesentium, reiciendis id voluptas repellendus!'
        },
        {
            img: 'https://i.pinimg.com/474x/5f/c7/6d/5fc76df6bda7762fe219ed48a724e69d.jpg', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab officia sit. Laborum itaque praesentium, reiciendis id voluptas repellendus!'
        },
        {
            img: 'https://www.houseofnarra.ph/wp/wp-content/uploads/2018/07/featured-image-wooden-furniture.jpg', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab officia sit. Laborum itaque praesentium, reiciendis id voluptas repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab '
        },
        {
            img: 'https://www.houseofnarra.ph/wp/wp-content/uploads/2018/07/featured-image-wooden-furniture.jpg', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab officia sit. Laborum itaque praesentium, reiciendis id voluptas repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquam iure vero voluptatem, inus quod optio omnis eius quibusdam nulla, ab '
        },

    ]

    return (
        <div>
            {myInitialInfoElements.map((el, index)=>{
                if(index % 2 === 0){
                    return <InfoElementLeft data={el}/>
                }else{
                    return <InfoElementRight data={el}/>
                }
            })}
        </div>
    )
}