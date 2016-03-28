import React from 'react';
import { throwError } from './util';
import Card from './card';

const equalsZero = (num) => num === 0;

class CardStack extends React.Component {
	constructor(props) {
		super(props);
		const childrenLength = props.children.length || 1;
		const headerHeight = props.height / childrenLength;

		throwError(childrenLength <= 1, 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.');

		this.initialTopOffsets = props.children.map((child, i) => equalsZero(i) ? 0: headerHeight * i);

		this.state = {
			topOffsets: this.initialTopOffsets,
			cardSelected: false
		};
	}

	handleCardClick(id, cb) {
		let state = {
			topOffsets: [],
			cardSelected: true
		};

		this.setState(
			this.state.topOffsets.reduce((prev, offset, index) => {
				let newOffset = (index === id) ? 0 : this.props.height;

				if(this.state.cardSelected) {
					prev.cardSelected = false;
					newOffset = this.initialTopOffsets[index];
				}

				prev.topOffsets.push(newOffset);

				return prev;
			}, state)
		);

		if(cb) {
			cb(this.state.cardSelected);
		};
	}

	renderCards() {
		return this.props.children.map((child, i) => (
			React.cloneElement(child, {
				key: i,
				cardId: i,
				hoverOffset: this.props.hoverOffset,
				cardSelected: this.state.cardSelected,
				height: this.props.height,
				topOffset: this.state.topOffsets[i],
				handleClick: this.handleCardClick.bind(this)
			})
		));
	}

	render() {
		const stackStyles = {
			...styles,
			background: this.props.background,
			height: this.props.height,
			width: this.props.width,
	  };
		return (
      <ul style={stackStyles}>
			  {this.renderCards()}
		  </ul>
	  );
	}
}

const styles = {
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	overflow: 'hidden',
	padding: 0,
	margin: 0
};

CardStack.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	background: React.PropTypes.string,
	hoverOffset: React.PropTypes.number
};

CardStack.defaultProps = {
	width: 350,
	height: 600,
	bgColor: 'f8f8f8',
	hoverOffset: 30
};

export default CardStack;
