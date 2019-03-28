import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
						src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
						alt="avatar"
						className="avatar-img"
						/>

						<div className="banner-text">
						<h1>Full Stack Engineer</h1>

						<hr/>
						<p>HTML/CSS | Javascript | React | Nodejs | MongoDB </p>
					<div className="social-links">

					{/* linkedin*/}
						<a href="https://www.google.com" target="_blank">
							<i className="fa fa-linkedin-square" aria-hidden="true" />
						</a>

						{/* Github*/}
						<a href="https://www.google.com" target="_blank">
							<i className="fa fa-github-square" aria-hidden="true" />
						</a>

						{/* Youtube*/}
						<a href="https://www.google.com" target="_blank">
							<i className="fa fa-youtube-square" aria-hidden="true" />
						</a>

						{/* linkedin*/}
						{/* <a href="https://www.google.com" target="_blank">
							<i className="fa fa-linkedin-square" aria-hidden="true" />
						</a> */}
					</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;