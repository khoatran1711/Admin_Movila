import react from 'react'

import './style.css'
import admin_img from './pic/admin.png'
import admin_pattern from './pic/admin_pattern.png'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { UseGetAccountLogin } from '../../DataQuery/Queri.queries'

const Login = () => {
	const btn = UseGetAccountLogin('a', 'b')
	return (
		<div>
			<section id='login_container'>
				<section id='login_section'>
					<section id='login_section_title'></section>
					<section id='login_form'>
						<form>
							<h1>
								Hi !
								<br /> Welcome back again <br />
							</h1>
							<h3>Enter your hotel account</h3>
							<input id='login_acc' type='text' name='hotel_account' />
							<h3>Please enter your code to log in</h3>
							<input id='login_pass' type='text' name='hotel_code' />
							<br />
						</form>
						{btn}
					</section>
				</section>
				<section id='login_banner'>
					<div className='banner_container'>
						<img src={admin_pattern} id='pattern_banner_container'></img>
					</div>
					<div className='banner_container'>
						<img src={admin_img} id='img_banner_container'></img>
					</div>
				</section>
			</section>
		</div>
	)
}

export default Login
