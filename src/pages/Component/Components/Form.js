import React, { useState } from 'react'
import axios from 'axios'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
        console.log(formData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(
                'https:www.philernst.com:5000/send',
                formData
            )
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="row g-3 needs-validation formContactus"
        >
            <div className="col-md-6 col-sm-6 col-12">
                <label for="name" class="visuallyhidden">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control inputbox "
                    id="name"
                    name="name"
                    placeholder="Name"
                    aria-required="true"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="col-md-6 col-sm-6 col-12">
                <label for="email" class="visuallyhidden">
                    E-mail
                </label>
                <input
                    type="text"
                    className="form-control inputbox"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    aria-required="true"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-md-12">
                <label for="message" class="visuallyhidden">
                    Message
                </label>
                <textarea
                    type="text"
                    className="form-control inputboxmessage inputbox"
                    id="message"
                    name="message"
                    placeholder="Meassage"
                    aria-required="true"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                    Please provide a Send Meassage.
                </div>
            </div>

            <div className="col-12 ">
                <button type="submit" className="send-btn button float-start">
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default Form
