import './Card.scss';

const Card = (props) => {
	const {card} = props;
	return (
		<>
			<li className='card-item'>
				{card.image && 
				<img className='card-cover' src={card.image}
					alt='Design'
				/>}
				{card.title}
			</li>
		</>
	);
};

export default Card;
