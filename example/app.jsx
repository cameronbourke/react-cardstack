import { CardStack, Card } from '../src/index';
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	}
};

const App = (props) => (
	<CardStack
		height={500}
		width={400}
		background='#f8f8f8'
	  hoverOffset={25}>

		<Card background='#2980B9'>
      <TeamMemberCard
	      imgSrc='https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg'
	      imgBorderColor='#015389'
	      name='James Stuart'
	      title='Training Manager'
	      mobileNo='0491 570 156'
	      location='Sydney, Australia'
	      role='Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years.'
	    />
		</Card>

		<Card background='#27AE60'>
			<TeamMemberCard
				imgSrc='https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg'
				imgBorderColor='#086C32'
				name='Isaac Pullman'
				title='Creative Director'
				mobileNo='0491 570 157'
				location='Brisbane, Australia'
				role="Isaac has overseen all of Hunter and Co's creative efforts for the last five years. He's ability to generate a shared vision between teams throughout the company has been his biggest achievement."
			/>
		</Card>

		<Card background='#9B27AE'>
			<TeamMemberCard
				imgSrc='https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
				imgBorderColor='#6A067A'
				name='Sarah Oscar'
				title='Sales Rep'
				mobileNo='0491 570 158'
				location='Sydney, Australia'
				role="In Sarah's short time with the company, she is now a key figure in the sales team for the Sydney and outer region. Her excellent communication skills has opened up the door to let her mentoring any new hires in sales."
			/>
		</Card>

		<Card background='#e67e22'>
			<TeamMemberCard
				imgSrc='https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg'
				imgBorderColor='#9D4F09'
				name='Srinivas Tamada'
				title='Tech Lead'
				mobileNo='0491 570 110'
				location='Melbourne, Australia'
				role="In recent years Hunter & Co's website and accompaning app has undergone a massive face lift. Srinivas was responsible for the exploration and planning of the new technology used. He now works on maintaining and continually improving the website."
			/>
		</Card>

	</CardStack>
);

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`
		}}
		src={imgSrc}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	const styles = {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0'
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px'
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic'
		}
	};
	const renderSummary = () => {
		if(summary) return (
			<p style={{ fontWeight: 300, lineHeight: 1.45 }}>
				{summary}
			</p>
		);
		return null;
	};

	return (
		<div style={styles.row}>
			<span className={`icon ${icon}`}
			style={{ ...styles.icon, alignSelf: 'flex-start' }}></span>
			<div style={{ width: '80%' }}>
				<h2 style={styles.title}>
					{title}
				</h2>
				{renderSummary()}
			</div>
		</div>
	);
};

const TeamMemberCard = (props) => (
	<div style={{ position: 'absolute', top: 0 }}>
		<header style={styles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
			<div>
				<h1 style={styles.headerName}>{props.name}</h1>
				<h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow
				icon='ion-ios-telephone-outline'
				title={props.mobileNo}
			/>

			<DetailsRow
				icon='ion-ios-location-outline'
				title={props.location}
			/>

			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Main Role'
				summary={props.role}
			/>
		</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
