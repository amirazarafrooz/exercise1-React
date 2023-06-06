import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import Link from "./Link";
import './card.css'

const Card = ({title,image,description,textlink1,textlink2}) => {
    return(

        <div class='card'>
        <Image image={image}/>
        <Title title={title}/>
        <Description description={description}/>
        <div class="links">
        <Link link={textlink1}/>
        <Link link={textlink2}/>
        </div>
        </div>
    )

}


export default Card;