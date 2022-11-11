import './nutritionCard.scss'

function NutritionCard(props) {
    return (  
    <div className='card-nutrition'>
        <div className='card-nutrition-icon-container'>
            <img className='nutrition-icon' src={props.icon} alt='calories icon'/>
        </div>
        <div className='card-nutrition-text-container'>
            <span className='nutrition-text-quantity'>{props.quantity}</span>
            <span className='nutrition-text-type'>{props.text}</span>
        </div>
    </div> );
}

export default NutritionCard;