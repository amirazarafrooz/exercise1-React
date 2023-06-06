import './Image.css'

const Image = ({image}) => {
    return(
        <div>
            <img class="image" src={image}></img>
        </div>
    )

}


export default Image;