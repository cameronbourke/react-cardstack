import React from 'react';

class Card extends React.Component {
	constructor (props) {
		super(props);
		this.state = { hover: false };

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter () {
		this.setState({ hover: true });
	}

	handleMouseLeave () {
		this.setState({ hover: false });
	}

	handleClick () {
		const {cardId, cardClicked} = this.props;
		this.props.onClick(cardId, cardClicked);
		this.setState({ hover: false });
	}

	render () {
		const { cardId, cardSelected, topOffset, hoverOffset } = this.props;

		const offset = (cardId !== 0) && this.state.hover && !cardSelected ? hoverOffset : 0;
		const transform = `translate3d(0,${topOffset - offset}px,0)`;

		const cardStyles = {
			...styles,
			background: this.props.background,
			transform,
			WebkitTransform: transform,
			height: this.props.height,
		};

		return (
			<li
				style={cardStyles}
				onClick={this.handleClick.bind(this)}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>
					{this.props.children}
			</li>
		);
	}
}

const styles = {
	position: 'absolute',
	top: 0,
	width: '100%',
	cursor: 'pointer',
	transition: '0.5s transform ease',
	WebkitTransition: '-webkit-transform 0.5s ease',
};

export default Card;
