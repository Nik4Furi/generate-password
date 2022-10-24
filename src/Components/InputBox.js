import React, { useState } from 'react'
import Copy from '../copy.svg'

function InputBox() {
    const [password, setPassword] = useState('');  

    //Generating the password when click the btn
    const handleGeneratePassword = () => {
        const data = "0123456789abcedefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";

        //Define the length of generating passwords
        const passwordLength = 16;
        let newPassword = '';

        //for loop to iterating new password
        for (let i = 0; i < passwordLength; i++) {
            const randomLength = Math.floor(Math.random() *data.length);
            newPassword += data.substring(randomLength,randomLength+1);            
        }

        setPassword(newPassword);
    }

    //Clip copy on the docs
    const handleCopyClipboard = ()=>{
        let password = document.getElementById('password');

        password.select();
        password.setSelectionRange(0,99);
        document.execCommand('copy');
    }

    return (
        <>
            <div className="container mx-auto my-auto d-block w-75 border border-danger bg-light rounded-start" style={{ height: "200px" }}>

                {/* our form to generate the random passwords */}
                <div className="my-2 d-flex">
                    <input type="text" className="form-control text-dark my-3 " id="password" placeholder='Generate Password' name="password" readOnly value={password} style={{ background: "rgb(234, 210, 210)" }} />
                    <abbr title="Copy to Clipboard"><img src={Copy} alt="Copy to clipboard" className='copyClipboard' onClick={handleCopyClipboard}/></abbr>
                </div>
                <button className="btn btn-danger my-3 rounded-start" onClick={handleGeneratePassword}>Generate Password</button>
            </div>
        </>
    )
}

export default InputBox
