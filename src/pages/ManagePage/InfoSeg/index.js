import react from 'react'

import './style.css'
import { UsePutHotelInfo } from '../../../DataQuery/Queri.queries'
import { UsePutAccountPass } from '../../../DataQuery/Queri.queries'

const InfoSeg = (props) => {
	const btn = UsePutHotelInfo(window.name)
	const btn_change_pass = UsePutAccountPass(props.accountID)
	return (
		<div id='info_seg'>
			<section id='info_title'>Information</section>
			<section id='info_form'>
				<form>
					<div className='info_label'>Name</div>
					<input
						id='edt_hotel_name'
						className='info_text'
						type='text'
						name='hotel_name'
						defaultValue={props.name}
					></input>

					<div className='info_label'>Address</div>
					<input
						id='edt_hotel_address'
						className='info_text'
						type='text'
						name='hotel_address'
						defaultValue={props.address}
					></input>

					<div className='info_label'>Email</div>
					<input
						id='edt_hotel_email'
						className='info_text'
						type='text'
						name='hotel_email'
						defaultValue={props.email}
					></input>

					<div className='info_label'>Image URL</div>
					<input
						id='edt_hotel_image'
						className='info_text'
						type='text'
						name='hotel_email'
						defaultValue={props.imageURL}
					></input>

					<div className='info_label'>Phone</div>
					<input
						id='edt_hotel_phone'
						className='info_text'
						type='text'
						name='hotel_phone'
						defaultValue={props.phone}
					></input>

					{btn}

					<div className='info_label'>Password</div>
					<input
						id='edt_hotel_pass'
						className='info_text'
						type='text'
						name='hotel_password'
					></input>

					<div className='info_label'>Confirm Password</div>
					<input
						id='edt_hotel_password_confirm'
						className='info_text'
						type='text'
						name='hotel_confirm_password'
					></input>
					{btn_change_pass}
				</form>
			</section>
		</div>
	)
}

export default InfoSeg
