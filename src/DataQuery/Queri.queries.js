import { API_KEY } from '../API/API'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const UseGetAccountByID = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'hotels/' + id + '/getaccount'
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetHotel = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'hotels/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetAccountLogin = (username, password) => {
	console.log(window.name)
	const [data, setData] = useState([])
	var url_key = API_KEY + 'accounts/login'
	var account1 = {
		username: 'username',
		password: 'password',
		role: 'user',
	}

	function count() {
		var acc = document.getElementById('login_acc').value
		var pass = document.getElementById('login_pass').value
		//window.location = 'http://localhost:3000/rooms'

		return axios
			.get(url_key, {
				params: {
					username: acc,
					password: pass,
					role: 'hotel',
				},
			})
			.then((response) => {
				setData(response.data)
				if (response.data[0]) {
					console.log('login')
					window.name = response.data[0].hotelaccount.id
					console.log(window.name)
					window.location = 'http://localhost:3001/Manage'
				} else {
				}
			})
	}

	return (
		<button id='submit' onClick={count}>
			{' '}
			Log in
		</button>
	)
}

export const UsePutHotelInfo = (id) => {
	const [updatedAt, setUpdatedAt] = useState(null)
	function Edit() {
		var hname = document.getElementById('edt_hotel_name').value
		var haddress = document.getElementById('edt_hotel_address').value
		var hemail = document.getElementById('edt_hotel_email').value
		var hphone = document.getElementById('edt_hotel_phone').value
		var rimageURL = document.getElementById('edt_hotel_image').value

		const article = {
			name: hname,
			email: hemail,
			address: haddress,
			phone: hphone,
			imageURL: rimageURL,
		}
		console.log(API_KEY + 'hotels/' + id)
		return axios.put(API_KEY + 'hotels/' + id, article).then((response) => {
			setUpdatedAt(response.data.updatedAt)
			window.location.reload()
		})
	}
	return (
		<button id='submit_edit_info' type='submit' onClick={Edit}>
			{' '}
			Change your information
		</button>
	)
}

export const UsePutAccountPass = (id) => {
	const [updatedAt, setUpdatedAt] = useState(null)

	function Edit() {
		var accId = id
		var new_pass = document.getElementById('edt_hotel_pass').value
		var confirm_new_pass = document.getElementById('edt_hotel_password_confirm').value

		var flag = true

		if (new_pass != confirm_new_pass) {
			alert('Your new password not match!')
			flag = false
		}

		if (flag) {
			const article = {
				password: new_pass,
			}
			return axios.put(API_KEY + 'accounts/update/' + accId, article).then((response) => {
				setUpdatedAt(response.data.updatedAt)
				window.location.reload()
			})
		}
	}
	return (
		<button id='submit_edit_info' type='submit' onClick={Edit}>
			{' '}
			Change your password
		</button>
	)
}

export const UsePostRoom = (id) => {
	const [articleId, setArticleId] = useState(null)

	function Add() {
		var rname = document.getElementById('add_room_name').value
		var rcat = document.getElementById('add_room_cate').value
		var rprice = document.getElementById('add_room_price').value
		var rnumberOfGuest = document.getElementById('add_room_guests').value
		var rfloor = document.getElementById('add_room_floor').value
		var rarea = document.getElementById('add_room_area').value
		var rwifi = document.getElementById('add_room_wifi').value
		var rview = document.getElementById('add_room_view').value
		var rdescription = document.getElementById('add_room_description').value
		var rimageURL = document.getElementById('add_room_image').value

		const article = {
			name: rname,
			cat: rcat,
			price: rprice,
			numberOfGuest: rnumberOfGuest,
			floor: rfloor,
			area: rarea,
			wifi: rwifi,
			view: rview == 'false' || rview == 'False' ? false : true,
			description: rdescription,
			imageURL: rimageURL,
		}

		return axios.post(API_KEY + 'rooms/' + id, article).then((response) => {
			setArticleId(response.data)
			alert('Add room successfully!')
		})
	}

	return (
		<button id='add_room_submit' onClick={Add}>
			{' '}
			Add room{' '}
		</button>
	)
}

export const UseGetHotelNotBookRoom = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bookings/notbooked/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UsePutRoom = () => {
	const [articleId, setArticleId] = useState(null)

	function Edit() {
		var id = document.getElementById('edit_room_id').value
		var rname = document.getElementById('edit_room_name').value
		var rcat = document.getElementById('edit_room_cate').value
		var rprice = document.getElementById('edit_room_price').value
		var rnumberOfGuest = document.getElementById('edit_room_guests').value
		var rfloor = document.getElementById('edit_room_floor').value
		var rarea = document.getElementById('edit_room_area').value
		var rwifi = document.getElementById('edit_room_wifi').value
		var rview = document.getElementById('edit_room_view').value
		var rdescription = document.getElementById('edit_room_des').value
		var rimageURL = document.getElementById('edit_room_image').value

		const article = {
			name: rname,
			cat: rcat,
			price: rprice,
			numberOfGuest: rnumberOfGuest,
			floor: rfloor,
			area: rarea,
			wifi: rwifi,
			view: rview == 'false' || rview == 'False' ? false : true,
			description: rdescription,
			imageURL: rimageURL,
		}

		return axios.put(API_KEY + 'rooms/' + id, article).then((response) => {
			setArticleId(response.data)
			alert('Edit room successfully!')
		})
	}

	return <button onClick={Edit}>Change</button>
}

export const UseDeleteRoom = () => {
	const [status, setStatus] = useState(null)

	function Delete() {
		var id = document.getElementById('edit_room_id').value

		return window.confirm('Do you want delete this rooms ?')
			? axios.delete(API_KEY + 'rooms/' + id).then((response) => {
					setStatus(response.data)
					alert('Delete room successfully!')
					window.location = 'http://localhost:3001/Manage'
			  })
			: ''
	}

	return <button onClick={Delete}>Delete</button>
}

export const UseGetHotelBookRoom = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bookings/booked/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetBookingByID = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bookings/hotels/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseValidateRoom = () => {
	const [status, setStatus] = useState(null)

	function Delete() {
		var booking_id = document.getElementById('booking_id').value
		console.log(booking_id)

		return window.confirm('Do you want validate this rooms ?')
			? axios.delete(API_KEY + 'bookings/validate/' + booking_id).then((response) => {
					setStatus(response.data)
					alert('Validating room successfully!')
					window.location = 'http://localhost:3001/Manage'
			  })
			: ''
	}

	return (
		<button id='validate' onClick={Delete}>
			Validate
		</button>
	)
}
