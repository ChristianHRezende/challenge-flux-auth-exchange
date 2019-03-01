import React from 'react'

import './SignUpEmailSend.css'

import mail from '../../../../images/mail.png'

const SignUpEmailSend = ({ email }) => (
    <div className='signup-email'>
        <div className='signup-email-content'>
            Um e-mail foi enviar para {email}
            <img src={mail} alt='Email' />
        </div>
    </div>
)

export default SignUpEmailSend