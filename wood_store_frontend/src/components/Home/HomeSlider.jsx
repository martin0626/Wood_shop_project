import classes from "./HomeSlider.module.css"
import { motion } from 'framer-motion'
import interiorImg from '../../assets/interior.jpg'
import exteriorImg from '../../assets/exterior.jpg'



export default function HomeSlider(){
    return (
            <motion.div 
                initial={{opacity:0, x: -300}} 
                animate={{opacity: 1, x: 0}} 
                transition={{delay: 0.5}} 
                className={classes.sliderContent}
            >   
                <div className={classes.header}>
                    <h1>Wood is the best materila for interion and exterior.</h1>
                    <div className={classes.images}>
                        <img src={interiorImg}/>   
                        <img src={exteriorImg}/>  
                    </div>
                    
                </div>
                <div className={classes.description}>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum maxime excepturi et expedita adipisci pariatur, sunt quae non velit voluptates fugiat repellendus natus corporis ipsa illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex harum earum suscipit necessitatibus cupiditate possimus minus beatae reprehenderit. Sapiente provident magnam incidunt molestiae doloremque deleniti ipsam fugit tempore. Rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis autem, eveniet magni tempore porro ipsam ratione! Quae accusamus ut provident repellat repellendus. Magni neque a blanditiis molestias asperiores fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam, sequi commodi totam rem exercitationem illo recusandae voluptatem sunt, quis debitis nostrum dignissimos doloremque. Veritatis repudiandae consectetur accusamus autem tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, repellendus sequi repudiandae velit mollitia consequatur quaerat ipsam illum perferendis quos id itaque amet placeat nobis quam error vel voluptas dolor. architecto. Ab, repellendus velit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente error quasi ullam provident. Dicta ex eos, tenetur cumque nesciunt doloribus repudiandae eaque, voluptates reiciendis aliquid sint assumenda consequuntur! Alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quaerat vitae corrupti at quasi nisi sequi id laborum, autem ex recusandae, itaque voluptatibus accusamus suscipit, tempora nam blanditiis aspernatur. Eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum maxime excepturi et expedita adipisci pariatur, sunt quae non velit voluptates fugiat repellendus natus corporis ipsa illo architecto. Ab, repellendus velit!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum maxime excepturi et expedita adipisci pariatur, sunt quae non velit voluptates fugiat repellendus natus corporis ipsa illo architecto. Ab, repellendus velit!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum maxime excepturi et expedita adipisci pariatur, sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae ipsum corrupti eos soluta explicabo sit, provident magni velit quia aliquam et officiis? Aperiam officia consectetur ipsum natus porro voluptatem? quae non velit voluptates fugiat repellendus natus corporis ipsa illo architecto. Ab, repellendus velit!</p>
                </div>


            </motion.div>
    )
};