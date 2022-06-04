import react from 'react'

import './style.css'
const InfoSeg = () => {
	return (
		<div id='info_seg'>
			<section id='info_title'>Information</section>
			<section id='info_form'>
				<form>
					<div class='info_label'>Name</div>
					<input className='info_text' type='text' name='hotel_name'></input>

					<div class='info_label'>Address</div>
					<input className='info_text' type='text' name='hotel_address'></input>

					<div class='info_label'>Email</div>
					<input className='info_text' type='text' name='hotel_email'></input>

					<div class='info_label'>Phone</div>
					<input className='info_text' type='text' name='hotel_phone'></input>

					<div class='info_label'>Password</div>
					<input className='info_text' type='text' name='hotel_password'></input>

					<div class='info_label'>Confirm Password</div>
					<input className='info_text' type='text' name='hotel_confirm_password'></input>

					<input id='submit_edit_info' type='submit' value='Change your information' />
				</form>
			</section>
		</div>
	)
}

export default InfoSeg
