import React from 'react';

class Card extends React.Component {
	constructor(props) {
	  super(props);
		this.state = {
			hover: false
		};
	}

	handleClick() {
		const {cardId, cardClicked} = this.props;
		this.props.handleClick(cardId, cardClicked);
		this.setState({ hover: false });
	}

	render() {
		const {cardId, cardSelected, topOffset, hoverOffset} = this.props;
		const offset = (cardId !== 0) && this.state.hover && !cardSelected ? hoverOffset: 0;
		const cardStyles = {
			...styles,
		  background: this.props.background,
		  transform: `translate3d(0,${this.props.topOffset - offset}px,0)`,
		  height: this.props.height
	  };
		return (
			<li
				style={cardStyles}
				onClick={this.handleClick.bind(this)}
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}>
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
	transition: '0.5s transform ease'
};

export default Card;
